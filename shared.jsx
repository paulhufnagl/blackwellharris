/* Blackwell Harris — shared site chrome & helpers for the multi-page UI kit.
   Composes design-system components from window.<Namespace>; exports BHShared. */

const NS = window.BlackwellHarrisDesignSystem_b35bfe;
const {
  SiteNav, Button, TextLink, MonoLabel,
  MediaFrame, TrustLogoStrip, ServiceCard, ImpactMetricCard,
  DarkFeatureBand, FooterBlock,
} = NS;

const Ico = ({ n, ...p }) => <i data-lucide={n} {...p}></i>;

/* shared helper styles (card variants) — always refresh the contents so an edit
   can't get stuck behind a persisted <style> tag from a soft reload. */
(function () {
  if (typeof document === 'undefined') return;
  let s = document.getElementById('bh-shared-css');
  if (!s) { s = document.createElement('style'); s.id = 'bh-shared-css'; document.head.appendChild(s); }
  s.textContent = `
  .bh-feature-card{
    background:var(--surface-card);
    border-radius:var(--radius-md);
    padding:28px;box-sizing:border-box;height:100%;
  }
  /* Subtle, consistent icon motion (Lucide Animated in spirit) — hover only.
     The line icon gently rises + settles and warms to sapphire. Reduced-motion
     is honored globally by the reset in base.css. */
  .bh-ico{transition:color var(--duration-med) var(--ease);}
  .bh-ico svg{transition:transform var(--duration-med) var(--ease);transform-origin:50% 55%;}
  .bh-ico-host:hover .bh-ico{color:var(--bh-sapphire);}
  .bh-ico-host:hover .bh-ico svg{animation:bh-ico-rise .6s var(--ease);}
  @keyframes bh-ico-rise{
    0%{transform:translateY(0) scale(1);}
    45%{transform:translateY(-4px) scale(1.1);}
    100%{transform:translateY(0) scale(1);}
  }
  /* Sticky stacked process cards — each step pins below the nav and the next
     rises over it, leaving a peek of the previous. Depth scale/dim is applied
     by JS (smoothed by these transitions); honors reduced motion globally. */
  .bh-proc{display:block;}
  .bh-proc__card{
    position:sticky;transform-origin:top center;overflow:hidden;box-sizing:border-box;
    background:var(--surface-card);border:1px solid var(--border-card);
    border-radius:var(--radius-lg);padding:32px 28px;margin-bottom:24px;
    box-shadow:0 2px 4px rgba(0,9,38,.05);
    transition:transform var(--duration-med) var(--ease),box-shadow var(--duration-med) var(--ease);
  }
  .bh-proc__card:last-child{margin-bottom:0;}
  .bh-proc__card > *{position:relative;z-index:1;}
  .bh-proc__veil{position:absolute;inset:0;z-index:0;background:var(--bh-ice-blue);
    opacity:var(--veil,0);transition:opacity var(--duration-med) var(--ease);pointer-events:none;}
  .bh-proc__num{font-family:var(--font-display);font-weight:600;font-size:38px;line-height:1;
    color:var(--bh-pale-brown);margin-bottom:12px;}
  .bh-proc__h{font-family:var(--font-display);font-weight:600;font-size:24px;letter-spacing:-0.2px;
    line-height:1.25;color:var(--text-primary);margin:0 0 8px;}
  .bh-proc__b{font-family:var(--font-body);font-size:16px;line-height:1.6;color:var(--text-muted);margin:0;}
  @media (min-width:760px){
    .bh-proc__card{display:grid;grid-template-columns:120px minmax(0,1fr);gap:32px;
      align-items:start;padding:40px 44px;margin-bottom:28px;}
    .bh-proc__num{margin-bottom:0;font-size:44px;}
    .bh-proc__b{max-width:640px;}
  }
  /* cookie consent */
  .bh-cookie{position:fixed;left:0;right:0;bottom:0;z-index:60;display:flex;justify-content:center;padding:16px;pointer-events:none;}
  .bh-cookie__card{pointer-events:auto;position:relative;width:100%;max-width:var(--container-max);
    background:var(--surface-card);border:1px solid var(--border-card);border-radius:var(--radius-lg);
    box-shadow:0 22px 44px -28px rgba(24,35,80,.5);
    display:flex;flex-wrap:wrap;align-items:center;gap:16px 32px;padding:22px 56px 22px 26px;
    animation:bh-cookie-in var(--duration-med) var(--ease);}
  .bh-cookie__text{flex:1 1 340px;margin:0;font-family:var(--font-body);font-size:15px;line-height:1.6;color:var(--text-primary);max-width:680px;}
  .bh-cookie__actions{display:flex;gap:12px;align-items:center;margin-left:auto;flex:0 0 auto;}
  .bh-cookie__close{position:absolute;top:14px;right:14px;width:30px;height:30px;display:flex;align-items:center;
    justify-content:center;border:0;background:transparent;border-radius:var(--radius-full);cursor:pointer;
    color:var(--text-muted);font-size:20px;line-height:1;transition:background var(--duration-fast) var(--ease),color var(--duration-fast) var(--ease);}
  .bh-cookie__close:hover{background:var(--bh-ice-blue);color:var(--text-primary);}
  @keyframes bh-cookie-in{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:none;}}
  @media (max-width:720px){
    .bh-cookie{padding:12px;}
    .bh-cookie__card{padding:20px 20px 22px;gap:18px;}
    .bh-cookie__actions{width:100%;}
    .bh-cookie__actions .bh-btn{flex:1;justify-content:center;}
    .bh-cookie__close{top:10px;right:10px;}
  }
  .bh-nav__brand{display:inline-flex;align-items:center;line-height:0;}
  .bh-nav__brand img{height:30px;width:auto;display:block;}
  @media (max-width:480px){ .bh-nav__brand img{height:24px;} }
  .bh-footer__brand img{height:32px;width:auto;display:block;}
  `;
})();

/* ---- layout helpers ---- */
const Container = ({ children, style }) => (
  <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 32px', boxSizing: 'border-box', ...style }}>{children}</div>
);
const Section = ({ id, children, style }) => (
  <section id={id} style={{ padding: '96px 0', ...style }}>{children}</section>
);
const SectionHead = ({ label, title, intro, align = 'left', maxWidth = 720 }) => (
  <div className="bh-reveal" style={{ textAlign: align, marginBottom: 56, maxWidth: align === 'center' ? maxWidth : 820, marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>
    {label && <MonoLabel style={{ marginBottom: 16 }}>{label}</MonoLabel>}
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 4.4vw, 52px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.6px', color: 'var(--text-primary)', margin: 0, textWrap: 'pretty' }}>{title}</h2>
    {intro && <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', margin: '22px 0 0', maxWidth: 620, marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>{intro}</p>}
  </div>
);

/* Page hero — mono eyebrow, big serif headline, lead, optional actions. */
const PageHero = ({ eyebrow, title, lead, actions, accentWord }) => (
  <Section style={{ padding: '80px 0 56px' }}>
    <Container>
      <div className="bh-reveal" style={{ maxWidth: 940 }}>
        {eyebrow && <MonoLabel style={{ marginBottom: 22 }}>{eyebrow}</MonoLabel>}
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6.4vw, 80px)', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-1px', color: 'var(--text-primary)', margin: 0, textWrap: 'balance' }}>{title}</h1>
        {lead && <p style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.55, color: 'var(--text-muted)', margin: '26px 0 0', maxWidth: 600 }}>{lead}</p>}
        {actions && <div style={{ display: 'flex', gap: 22, alignItems: 'center', marginTop: 34, flexWrap: 'wrap' }}>{actions}</div>}
      </div>
    </Container>
  </Section>
);

/* A simple titled feature item (used in 2/3/4-up grids). `card` wraps it as a
   distinct surface block — white panel, soft border, tinted icon badge, hover lift. */
const Feature = ({ index, label, title, children, icon, href, linkLabel, card = false }) => {
  const inner = (
    <>
      {index && <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, lineHeight: 1, color: 'var(--bh-pale-brown)' }}>{index}</div>}
      {icon && <div className="bh-ico" style={{ color: 'var(--bh-deep-blue)', display: 'flex' }}><i data-lucide={icon} style={{ width: card ? 26 : 24, height: card ? 26 : 24 }}></i></div>}
      {label && <MonoLabel>{label}</MonoLabel>}
      {title && <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.1px', color: 'var(--text-primary)', margin: 0 }}>{title}</h3>}
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{children}</p>
      {linkLabel && <div style={{ marginTop: 4 }}><TextLink href={href || '#'}>{linkLabel}</TextLink></div>}
    </>
  );
  return (
    <div className={card ? 'bh-feature-card bh-ico-host' : 'bh-ico-host'} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>{inner}</div>
  );
};
const Grid = ({ min = 260, gap = 32, children, style }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap, ...style }}>{children}</div>
);

/* A media card: rounded photo over a title, body, and link (Home "cards with photos"). */
const MediaCard = ({ caption, placeholder, subject, brief, src, alt, title, children, href, linkLabel }) => (
  <div className="bh-card-hoverable" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
    <MediaFrame src={src} alt={alt} placeholder={placeholder} subject={subject} brief={brief} caption={caption} ratio="4 / 3" radius="md" />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing: '-0.2px', color: 'var(--text-primary)', margin: 0 }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{children}</p>
      {linkLabel && <div style={{ marginTop: 2 }}><TextLink href={href || '#'}>{linkLabel}</TextLink></div>}
    </div>
  </div>
);

const NAV_ITEMS = [
  { label: 'Home', href: 'index.html' },
  { label: 'About', href: 'about.html' },
  { label: 'Services', href: 'services.html' },
  { label: 'Impact', href: 'impact.html' },
  { label: 'Contact', href: 'contact.html' },
];
/* Nav-bar menu: Home is the logo, Contact is the CTA button. */
const MENU_ITEMS = [
  { label: 'About', href: 'about.html' },
  { label: 'Services', href: 'services.html' },
  { label: 'Impact', href: 'impact.html' },
];

const Footer = () => (
  <FooterBlock
    brand={<img src="assets/logo-light.png" alt="Blackwell Harris" />}
    prompt="An Impact-first Multifamily Office. Antwerp. Chicago."
    address={['Borsbeeksebrug 22', '2600 Antwerp, Belgium', '+32 3 808 56 92', '', '333 W Wolf Point Plaza', 'Chicago, IL 60654, USA', '+1 773 739 6164', '', 'contact@blackwellharris.com']}
    legal="© 2026 Blackwell Harris. All rights reserved."
    columns={[
      { title: 'Explore', links: NAV_ITEMS },
      { title: 'Get in touch', links: [{ label: 'Antwerp office', href: 'contact.html' }, { label: 'Chicago office', href: 'contact.html' }, { label: 'contact@blackwellharris.com', href: 'mailto:contact@blackwellharris.com' }, { label: '+32 3 808 56 92', href: 'tel:+3238085692' }, { label: '+1 773 739 6164', href: 'tel:+17737396164' }] },
      { title: 'Legal', links: [{ label: 'Privacy Policy', href: 'privacy.html' }] },
    ]}
  />
);

/* ---- canvas-color tweak + scroll reveal + page mount ---- */
const CANVAS_DEFAULTS = { canvas: '#e4eef8' };
const CANVAS_OPTIONS = ['#e4eef8', '#d6e6f3', '#eef4fb', '#c8dcee', '#a6c5d7', '#ffffff'];

function Shell({ active, children }) {
  const [t, setTweak] = window.useTweaks(CANVAS_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.style.setProperty('--bh-canvas', t.canvas);
  }, [t.canvas]);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll('.bh-reveal'));
    if (reduce) { els.forEach(e => e.classList.add('is-in')); return; }
    const revealInView = () => {
      const vh = window.innerHeight || 800;
      els.forEach(e => { if (e.getBoundingClientRect().top < vh * 0.92) e.classList.add('is-in'); });
    };
    revealInView();
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(e => { if (!e.classList.contains('is-in')) io.observe(e); });
    window.addEventListener('scroll', revealInView, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', revealInView); };
  }, []);
  return (
    <div>
      <SiteNav active={active} brand={<img src="assets/logo.png" alt="Blackwell Harris" />} brandHref="index.html" cta={{ label: 'Contact', href: 'contact.html' }} items={MENU_ITEMS} />
      <main>{children}</main>
      <Footer />
      <CookieConsent />
      {window.TweaksPanel && (
        <window.TweaksPanel>
          <window.TweakSection label="Background" />
          <window.TweakColor label="Page canvas" value={t.canvas} options={CANVAS_OPTIONS} onChange={(v) => setTweak('canvas', v)} />
        </window.TweaksPanel>
      )}
    </div>
  );
}

/* Cookie consent — bottom banner, persists the user's choice in localStorage.
   Replace the placeholder copy in <p class="bh-cookie__text"> with your final text. */
const COOKIE_KEY = 'bh-cookie-consent';
const GA_ID = 'G-WZ0E5PMHHM';

// Load GA only after consent. Idempotent.
let gaLoaded = false;
function loadAnalytics() {
  if (gaLoaded || document.getElementById('ga-gtag')) return;
  gaLoaded = true;
  const s = document.createElement('script');
  s.id = 'ga-gtag';
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
}

function CookieConsent() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem(COOKIE_KEY); } catch (e) { /* storage blocked */ }
    if (saved === 'accepted') loadAnalytics();   // returning visitor who opted in
    if (!saved) setShow(true);
  }, []);
  if (!show) return null;
  const choose = (value) => {
    try { localStorage.setItem(COOKIE_KEY, value); } catch (e) { /* storage blocked */ }
    if (value === 'accepted') loadAnalytics();
    setShow(false);
  };
  return (
    <div className="bh-cookie" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <div className="bh-cookie__card">
        <button type="button" className="bh-cookie__close" aria-label="Close" onClick={() => setShow(false)}>&times;</button>
        {/* PLACEHOLDER — swap for your final cookie message. */}
        <p className="bh-cookie__text">We use cookies to improve your experience on our site. By using our site, you consent to cookies.</p>
        <div className="bh-cookie__actions">
          <Button variant="outline" onClick={() => choose('declined')}>Decline</Button>
          <Button variant="primary" onClick={() => choose('accepted')}>Accept</Button>
        </div>
      </div>
    </div>
  );
}

function mountPage(PageBody, active) {
  const go = () => {
    const root = document.getElementById('root');
    ReactDOM.createRoot(root).render(<Shell active={active}><PageBody /></Shell>);
  };
  if (window.React && window.ReactDOM && window.BlackwellHarrisDesignSystem_b35bfe) go();
  else setTimeout(() => mountPage(PageBody, active), 30);
}

Object.assign(window, {
  BHShared: { Container, Section, SectionHead, PageHero, Feature, Grid, MediaCard, Ico, mountPage,
              Button, TextLink, MonoLabel, MediaFrame, TrustLogoStrip, ServiceCard, ImpactMetricCard, DarkFeatureBand },
});
