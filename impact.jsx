/* Blackwell Harris — Impact page body. */
const { Container, Section, SectionHead, PageHero, Feature, Grid,
        Button, TextLink, MonoLabel, MediaFrame, TrustLogoStrip } = window.BHShared;

const CAUSES = [
  ['globe-2', 'Climate & the Natural World', 'Funding the transition and protecting what cannot be replaced.'],
  ['users', 'Equality & Human Rights', 'Backing organisations that defend dignity wherever it is under pressure.'],
  ['sprout', 'Poverty & Opportunity', 'Closing gaps in income, housing and access that hold people back.'],
  ['heart-handshake', 'Inclusion', 'Supporting a world where all kinds of people are heard, represented and safe.'],
];

const STRUCTURES = ['A private foundation', 'A donor-advised fund', 'A charitable bequest within your estate', 'A giving programme run through us'];

function ImpactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Impact"
        title="Wealth that gives back."
        lead="We believe generosity, organised well, changes what is possible. Blackwell Harris brings the discipline of investment to the practice of giving."
        actions={<Button variant="primary" href="contact.html">Talk to us</Button>}
      />

      {/* Our Approach */}
      <Section style={{ background: 'var(--bh-soft-stone)', padding: '96px 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56, alignItems: 'start' }}>
            <div className="bh-reveal">
              <MonoLabel style={{ marginBottom: 18 }}>Our approach</MonoLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.8vw, 46px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.6px', color: 'var(--text-primary)', margin: 0 }}>
                Giving as partnership.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', margin: '22px 0 0', maxWidth: 480 }}>
                The best philanthropy is built on relationships — with the organisations doing
                the work and with the people funding it. We help families form lasting
                partnerships with the causes they back: understanding the work deeply,
                supporting it patiently and staying for results. We often connect families to
                each other, because giving together goes further than giving alone.
              </p>
            </div>
            <div className="bh-reveal d1"><MediaFrame ratio="4 / 5" radius="lg" caption="Partnership" style={{ height: 340, aspectRatio: 'auto' }}
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?fm=jpg&q=80&w=1400&auto=format&fit=crop"
              alt="Two people shaking hands across a table"
              subject="Giving, in partnership"
              brief="Two hands meeting across a worktable mid-conversation, or an Antwerp community project seen with restraint — present, purposeful, never posed." /></div>
          </div>
        </Container>
      </Section>

      {/* The Practical Side */}
      <Section style={{ padding: '96px 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56 }}>
            <div className="bh-reveal">
              <MonoLabel style={{ marginBottom: 16 }}>The practical side</MonoLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.5px', color: 'var(--text-primary)', margin: 0 }}>
                How we help you give.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', margin: '20px 0 0', maxWidth: 480 }}>
                We help you define the change you want to fund and build the structure to
                deliver it. Then we report on it, the same way we report on your investments —
                you see where every contribution went and what it achieved.
              </p>
            </div>
            <div className="bh-reveal d1" style={{ alignSelf: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {STRUCTURES.map((s, i) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 0', borderTop: '1px solid var(--bh-hairline)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--bh-pale-brown)' }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--text-primary)' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Causes — powder blue backdrop */}
      <div style={{ background: 'var(--bh-powder-blue)', padding: '96px 0' }}>
        <Container>
          <div className="bh-reveal" style={{ marginBottom: 56, maxWidth: 720 }}>
            <MonoLabel tone="muted" style={{ marginBottom: 16, color: 'var(--bh-deep-blue)' }}>Where families give</MonoLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.6px', color: 'var(--bh-deep-blue)', margin: 0 }}>
              The causes closest to our clients.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--bh-deep-blue)', opacity: .8, margin: '20px 0 0', maxWidth: 560 }}>
              Every family gives differently, but some patterns run through our community.
            </p>
          </div>
          <Grid min={240} gap={28}>
            {CAUSES.map(([ic, t, d], i) => (
              <div className={`bh-reveal d${(i % 3) + 1} bh-ico-host`} key={t}
                style={{ background: 'var(--bh-white)', borderRadius: 'var(--radius-md)', padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div className="bh-ico" style={{ color: 'var(--bh-deep-blue)', display: 'flex' }}><i data-lucide={ic} style={{ width: 26, height: 26 }}></i></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: 'var(--text-primary)', margin: 0 }}>{t}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </Grid>
          <div className="bh-reveal" style={{ marginTop: 56 }}>
            <TrustLogoStrip caption="Among the organisations our families support">
              <a className="bh-trust__mark" href="https://www.oxfam.org" target="_blank" rel="noopener noreferrer" aria-label="Oxfam"><img className="bh-trust__img" src="assets/oxfam.svg" alt="Oxfam" /></a>
              <a className="bh-trust__mark" href="https://www.ilga-europe.org" target="_blank" rel="noopener noreferrer" aria-label="ILGA-Europe"><img className="bh-trust__img" src="assets/ilga-europe.png" alt="ILGA-Europe" /></a>
              <a className="bh-trust__mark" href="https://www.greenpeace.org" target="_blank" rel="noopener noreferrer" aria-label="Greenpeace"><img className="bh-trust__img" src="assets/greenpeace.svg" alt="Greenpeace" /></a>
            </TrustLogoStrip>
          </div>
        </Container>
      </div>
    </div>
  );
}

window.ImpactPage = ImpactPage;
