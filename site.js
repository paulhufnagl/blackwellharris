// Blackwell Harris — site behaviour. Vanilla JS, no dependencies.
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Sticky nav: hairline once scrolled
  var nav = document.querySelector('.bh-nav');
  if (nav) {
    var onNav = function () { nav.classList.toggle('bh-nav--scrolled', window.scrollY > 10); };
    onNav();
    window.addEventListener('scroll', onNav, { passive: true });
  }

  // Mobile menu
  var burger = document.querySelector('.bh-nav__burger');
  if (burger && nav) {
    burger.addEventListener('click', function () { nav.classList.toggle('bh-nav--open'); });
    nav.querySelectorAll('.bh-nav__menu a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('bh-nav--open'); });
    });
  }

  // Scroll reveal
  var revealEls = [].slice.call(document.querySelectorAll('.bh-reveal'));
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    var vh = window.innerHeight || 800;
    revealEls.forEach(function (el) {
      if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add('is-in');
      else io.observe(el);
    });
  }

  // Announcement bar dismiss
  var ann = document.querySelector('.bh-announce');
  if (ann) {
    var x = ann.querySelector('.bh-announce__close');
    if (x) x.addEventListener('click', function () { ann.remove(); });
  }

  // Services: sticky process stack — scale/dim buried cards
  var stack = document.querySelector('.bh-proc');
  if (stack) {
    var NAV = 100, PEEK = 20;
    var cards = [].slice.call(stack.querySelectorAll('.bh-proc__card'));
    var raf = 0;
    var update = function () {
      raf = 0;
      var pinned = cards.map(function (el, j) { return el.getBoundingClientRect().top <= (NAV + j * PEEK) + 1; });
      cards.forEach(function (el, i) {
        var depth = 0;
        for (var j = i + 1; j < cards.length; j++) if (pinned[j]) depth++;
        el.style.transform = reduce ? 'none' : 'scale(' + Math.max(1 - depth * 0.035, 0.86) + ')';
        el.style.boxShadow = depth === 0 ? '0 18px 40px -24px rgba(0,9,38,.45)' : '0 2px 4px rgba(0,9,38,.05)';
        el.style.setProperty('--veil', reduce ? 0 : Math.min(depth * 0.1, 0.32));
      });
    };
    var onScroll = function () { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }

  // Contact form -> mailto handoff, then a thank-you
  var nameField = document.getElementById('c-name');
  if (nameField) {
    var form = nameField.closest('form');
    if (form) form.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = function (id) { var el = document.getElementById(id); return el ? el.value : ''; };
      var subject = encodeURIComponent('Website enquiry' + (val('c-name') ? ' from ' + val('c-name') : ''));
      var body = encodeURIComponent(
        'Name: ' + val('c-name') + '\n' +
        'Email: ' + val('c-email') + '\n' +
        'Enquiring as: ' + val('c-enq') + '\n\n' + val('c-msg')
      );
      window.location.href = 'mailto:contact@blackwellharris.com?subject=' + subject + '&body=' + body;
      var ok = document.createElement('p');
      ok.style.cssText = 'font-family:var(--font-body);font-size:18px;line-height:1.6;color:var(--bh-success);margin:0;';
      ok.textContent = 'Thank you — your message is with us. We reply personally, usually within two working days.';
      form.replaceWith(ok);
    });
  }

  // Cookie consent + consent-gated Google Analytics (G-WZ0E5PMHHM)
  var KEY = 'bh-cookie-consent', GA_ID = 'G-WZ0E5PMHHM', gaLoaded = false;
  function loadAnalytics() {
    if (gaLoaded || document.getElementById('ga-gtag')) return;
    gaLoaded = true;
    var s = document.createElement('script');
    s.id = 'ga-gtag'; s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved === 'accepted') {
    loadAnalytics();
  } else if (saved !== 'declined') {
    var wrap = document.createElement('div');
    wrap.className = 'bh-cookie';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-label', 'Cookie consent');
    // PLACEHOLDER — swap the text in .bh-cookie__text for your final cookie message.
    wrap.innerHTML =
      '<div class="bh-cookie__card">' +
        '<button type="button" class="bh-cookie__close" aria-label="Close">&times;</button>' +
        '<p class="bh-cookie__text">We use cookies to improve your experience on our site. By using our site, you consent to cookies.</p>' +
        '<div class="bh-cookie__actions">' +
          '<button type="button" class="bh-btn bh-btn--outline" data-choice="declined">Decline</button>' +
          '<button type="button" class="bh-btn bh-btn--primary" data-choice="accepted">Accept</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(wrap);
    var choose = function (v) {
      try { localStorage.setItem(KEY, v); } catch (e) {}
      if (v === 'accepted') loadAnalytics();
      wrap.remove();
    };
    wrap.querySelector('.bh-cookie__close').addEventListener('click', function () { wrap.remove(); });
    wrap.querySelectorAll('[data-choice]').forEach(function (b) {
      b.addEventListener('click', function () { choose(b.getAttribute('data-choice')); });
    });
  }
})();
