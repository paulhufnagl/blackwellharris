/* Blackwell Harris — Services page body. */
const { Container, Section, SectionHead, PageHero, Feature, Grid,
        Button, TextLink, MonoLabel, MediaFrame, TrustLogoStrip, DarkFeatureBand } = window.BHShared;

const PROCESS = [
  ['01', 'Discovery', 'Every engagement starts with values discovery — a structured exercise that maps what your family stands for and where you will not compromise. It becomes the brief for everything we build.'],
  ['02', 'Screen', 'We remove companies whose practices work against your brief, then assess what remains on financial quality and alignment with the UN Sustainable Development Goals.'],
  ['03', 'Select', 'Investments that pass both tests are approved for your portfolio, each with a plan for how we will engage as owners.'],
  ['04', 'Activate', 'We construct everything you hold, public and private — including thematic strategies in clean energy, gender equity, affordable housing, sustainable food and financial inclusion.'],
  ['05', 'Steward & Review', 'We monitor, measure and revisit every stage, so the portfolio stays aligned as your life and the world change.'],
];

const BEYOND = [
  ['scroll-text', 'Legacy Planning', 'Structures that carry your intentions across generations.'],
  ['graduation-cap', 'Next-Generation Education', 'Inheritors join the table early and we build their confidence through real involvement.'],
  ['concierge-bell', 'Concierge Services', 'Property and lifestyle management, family administration and relocation — the practical side, taken care of.'],
  ['hand-heart', 'Philanthropy Advisory', 'Strategy and measurement for your philanthropy, covered in depth on our Impact page.'],
  ['gavel', 'Legal & Tax Guidance', 'Cross-border wealth raises hard questions. We coordinate the answers with standing partners.'],
];

const PROC_NAV = 100, PROC_PEEK = 20;

/* Sticky stacked process cards: each pins below the nav and the next rises over
   it. A rAF scroll handler scales/dims buried cards; CSS transitions smooth it. */
function ProcessStack({ steps }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll('.bh-proc__card'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const update = () => {
      raf = 0;
      const pinned = cards.map((el, j) => el.getBoundingClientRect().top <= (PROC_NAV + j * PROC_PEEK) + 1);
      cards.forEach((el, i) => {
        let depth = 0;
        for (let j = i + 1; j < cards.length; j++) if (pinned[j]) depth++;
        el.style.transform = reduce ? 'none' : `scale(${Math.max(1 - depth * 0.035, 0.86)})`;
        el.style.boxShadow = depth === 0
          ? '0 18px 40px -24px rgba(0,9,38,.45)'
          : '0 2px 4px rgba(0,9,38,.05)';
        el.style.setProperty('--veil', reduce ? 0 : Math.min(depth * 0.1, 0.32));
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [steps]);
  return (
    <div className="bh-proc" ref={ref}>
      {steps.map(([n, t, d], i) => (
        <div className="bh-proc__card" key={n} style={{ top: PROC_NAV + i * PROC_PEEK, zIndex: i + 1 }}>
          <div className="bh-proc__veil" aria-hidden="true"></div>
          <div className="bh-proc__num">{n}</div>
          <div>
            <h3 className="bh-proc__h">{t}</h3>
            <p className="bh-proc__b">{d}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Centered around your values, invested for the world you want."
        actions={<Button variant="primary" href="contact.html">Get in touch</Button>}
      />

      {/* The Two Questions */}
      <Section style={{ background: 'var(--bh-soft-stone)', padding: '96px 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56 }}>
            <div className="bh-reveal">
              <MonoLabel style={{ marginBottom: 18 }}>The two questions</MonoLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.8vw, 46px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.6px', color: 'var(--text-primary)', margin: 0 }}>
                Will it perform? And what will it change?
              </h2>
            </div>
            <div className="bh-reveal d1" style={{ alignSelf: 'center' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', margin: 0, maxWidth: 480 }}>
                We research both with great attention. Financial analysis tells us whether a
                company is strong enough to grow for decades. Impact analysis tells us what
                that growth will do in the world. An investment earns its place when the
                answer to both is affirmative.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Process */}
      <Section style={{ padding: '96px 0' }}>
        <Container>
          <SectionHead label="Our process" title="Five steps, one discipline." />
          <ProcessStack steps={PROCESS} />
        </Container>
      </Section>

      {/* Using Our Voice — dark band + three points */}
      <Section style={{ padding: '0 0 96px' }}>
        <Container>
          <div className="bh-reveal">
            <DarkFeatureBand
              label="Using our voice"
              heading="Ownership is influence."
              body="Blackwell Harris votes your shares in-house and engages company boards directly, guided by your values brief.">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 28, marginTop: 36 }}>
                {[['Selective', 'We engage where your holdings give us real leverage, on the issues that matter most.'],
                  ['Direct', 'Voting is done by us, informed by you. We never hand your voice to a third party.'],
                  ['Accountable', 'Every engagement has an objective and a timeframe, and we report on how companies respond.']].map(([t, d]) => (
                  <div key={t}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.3px', color: 'var(--bh-on-dark)', marginBottom: 14 }}>{t}</div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--bh-on-dark)', opacity: .85, margin: 0 }}>{d}</p>
                  </div>
                ))}
              </div>
            </DarkFeatureBand>
          </div>
        </Container>
      </Section>

      {/* Proving It */}
      <Section style={{ padding: '0 0 96px' }}>
        <Container>
          <div className="bh-reveal" style={{ maxWidth: 680 }}>
            <MonoLabel style={{ marginBottom: 16 }}>Proving it</MonoLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.5px', color: 'var(--text-primary)', margin: 0 }}>
              Measured, then apparent.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', margin: '20px 0 0' }}>
              Each year, you receive an impact report alongside your financial statements,
              mapped to the UN SDGs. Performance and progress, side by side.
            </p>
          </div>
        </Container>
      </Section>

      {/* Beyond the Portfolio */}
      <Section style={{ background: 'var(--bh-soft-stone)', padding: '96px 0' }}>
        <Container>
          <SectionHead label="Beyond the portfolio" title="A complete office, discreetly run." />
          <Grid min={260} gap={28}>
            {BEYOND.map(([ic, t, d], i) => (
              <div className={`bh-reveal d${(i % 3) + 1}`} key={t}><Feature card icon={ic} title={t}>{d}</Feature></div>
            ))}
          </Grid>
          <div className="bh-reveal" style={{ marginTop: 64, paddingTop: 48, borderTop: '1px solid var(--bh-hairline)' }}>
            <TrustLogoStrip caption="Coordinated with our standing legal & tax partners">
              <a className="bh-trust__mark" href="https://www.bakermckenzie.com/en/locations/emea/belgium" target="_blank" rel="noopener noreferrer" aria-label="Baker McKenzie"><img className="bh-trust__img" src="assets/baker-mckenzie.svg" alt="Baker McKenzie" /></a>
              <a className="bh-trust__mark" href="https://www.pwclegal.be/en/" target="_blank" rel="noopener noreferrer" aria-label="PwC Legal"><img className="bh-trust__img" src="assets/pwc.png" alt="PwC Legal" /></a>
            </TrustLogoStrip>
          </div>
        </Container>
      </Section>
    </div>
  );
}

window.ServicesPage = ServicesPage;
