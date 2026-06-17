/* Blackwell Harris — Home page body. */
const { Container, Section, SectionHead, PageHero, Feature, Grid, MediaCard,
        Button, TextLink, MonoLabel, MediaFrame, DarkFeatureBand } = window.BHShared;

function HomePage() {
  return (
    <div>
      {/* Hero — immersive full-bleed video stage */}
      <section style={{ position: 'relative', minHeight: 'clamp(580px, 90vh, 940px)', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--bh-deep-navy)', isolation: 'isolate' }}>
        <video
          src="../../uploads/bu_2.mp4"
          autoPlay muted loop playsInline preload="metadata"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(0,9,38,.58) 0%, rgba(0,9,38,.2) 32%, rgba(0,9,38,.86) 100%), linear-gradient(90deg, rgba(0,9,38,.66) 0%, rgba(0,9,38,0) 64%)' }} />
        <Container style={{ position: 'relative', zIndex: 2, paddingTop: 96, paddingBottom: 96 }}>
          <div style={{ maxWidth: 880 }}>
            <div className="bh-reveal"><MonoLabel tone="dark" style={{ marginBottom: 26 }}>Multifamily Office · Antwerp</MonoLabel></div>
            <h1 className="bh-reveal d1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 7.6vw, 100px)', fontWeight: 700, lineHeight: 0.98, letterSpacing: '-1.4px', color: 'var(--bh-on-dark)', margin: 0, textWrap: 'balance' }}>
              Wealth can do more than <span style={{ color: 'var(--bh-powder-blue)' }}>grow</span>.
            </h1>
            <p className="bh-reveal d2" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(18px, 1.5vw, 21px)', lineHeight: 1.55, color: 'var(--bh-on-dark)', opacity: .82, margin: '30px 0 0', maxWidth: 540 }}>
              Blackwell Harris is an impact-first multifamily office bringing what families
              own and what they believe into one mandate.
            </p>
            <div className="bh-reveal d3" style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 40, flexWrap: 'wrap' }}>
              <Button variant="primary" href="contact.html">Get in touch</Button>
              <Button variant="outline" href="services.html" style={{ color: 'var(--bh-on-dark)', borderColor: 'rgba(214,230,243,.5)' }}>See how we invest</Button>
            </div>
          </div>
        </Container>
        <div aria-hidden="true" style={{ position: 'absolute', right: 32, bottom: 26, zIndex: 2, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.6px', textTransform: 'uppercase', color: 'var(--bh-on-dark)', opacity: .55, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span>Antwerp, Belgium</span><span style={{ width: 30, height: 1, background: 'currentColor' }}></span>
        </div>
      </section>

      {/* Invest well. Invest for good. */}
      <Section style={{ padding: '96px 0 72px' }}>
        <Container>
          <div className="bh-reveal" style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.6vw, 52px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.6px', color: 'var(--text-primary)', margin: 0 }}>
              Invest well. Invest for good.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.6, color: 'var(--text-muted)', margin: '22px auto 0', maxWidth: 600 }}>
              Performance and purpose belong together, and we never separate them. The same
              standard runs through everything we manage for you.
            </p>
          </div>
        </Container>
      </Section>

      {/* Cards with photos — Invest / Plan / Give */}
      <Section style={{ padding: '0 0 96px' }}>
        <Container>
          <Grid min={280} gap={28}>
            <div className="bh-reveal d1"><MediaCard caption="Invest" title="Invest"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=80&w=1600&auto=format&fit=crop"
              alt="Advisers reviewing figures together over a desk"
              subject="Capital, considered"
              brief="Still life on a partner's desk — a leather portfolio, a single brass lamp, the river beyond the glass. No screens.">
              Portfolios shaped by your values and activated across everything you own.
            </MediaCard></div>
            <div className="bh-reveal d2"><MediaCard caption="Plan" title="Plan"
              src="https://images.unsplash.com/photo-1568667256549-094345857637?fm=jpg&q=80&w=1600&auto=format&fit=crop"
              alt="A grand heritage library of curved timber shelves"
              subject="What carries forward"
              brief="A family signet and archival deeds laid on linen in raking daylight — generational continuity, handled with care.">
              Legacy that carries your intentions from one generation to the next.
            </MediaCard></div>
            <div className="bh-reveal d3"><MediaCard caption="Community" title="Give"
              src="assets/give1.png"
              alt="A hand-painted 'Give' sign in a community garden"
              subject="Visible good"
              brief="A restored Antwerp civic interior in warm, ordinary use — unstaged and generous, any people kept distant and discreet.">
              Philanthropy with strategy behind it and impact you can see.
            </MediaCard></div>
          </Grid>
        </Container>
      </Section>

      {/* How We Invest — split */}
      <Section style={{ background: 'var(--bh-soft-stone)', padding: '96px 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56, alignItems: 'center' }}>
            <div className="bh-reveal">
              <MonoLabel style={{ marginBottom: 18 }}>How we invest</MonoLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.4vw, 48px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.6px', color: 'var(--text-primary)', margin: 0 }}>
                Every investment, asked twice.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', margin: '22px 0 0', maxWidth: 460 }}>
                Will it perform? And what will it change? The Blackwell Harris process exists
                to answer those two questions well.
              </p>
              <div style={{ marginTop: 28 }}><TextLink href="services.html">See how we invest</TextLink></div>
            </div>
            <div className="bh-reveal d1">
              <MediaFrame ratio="4 / 3" radius="lg" caption="Diligence"
                src="assets/eve1.png"
                alt="An adviser in a tailored suit reviewing notes on a phone"
                subject="The work behind the wealth"
                brief="Architectural interior of the practice — oak, stone and daylight; diligence papers on a long table, a meeting held in soft focus." />
            </div>
          </div>
        </Container>
      </Section>

      {/* Where We Start — Values Discovery */}
      <Section style={{ padding: '96px 0' }}>
        <Container>
          <div className="bh-reveal" style={{ borderTop: '1px solid var(--bh-deep-blue)', paddingTop: 36, display: 'grid', gridTemplateColumns: 'minmax(0,0.8fr) minmax(0,1.2fr)', gap: 48 }}>
            <div>
              <MonoLabel style={{ marginBottom: 14 }}>Where we start</MonoLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.6vw, 44px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.5px', color: 'var(--text-primary)', margin: 0 }}>
                Values Discovery
              </h2>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.55, color: 'var(--text-primary)', margin: 0, maxWidth: 640 }}>
              A guided conversation about the principles you live by and the difference you
              want your wealth to make, in your lifetime and beyond it. What emerges guides
              how we invest and how you{'\u00A0'}give.
            </p>
          </div>
        </Container>
      </Section>

      {/* Who We Work With */}
      <Section style={{ background: 'var(--bh-soft-stone)', padding: '96px 0' }}>
        <Container>
          <SectionHead label="Who we work with" title="A long-term partner across everything a family owns." intro="Most of our relationships span decades and carry through generations." />
          <Grid min={280} gap={32}>
            <div className="bh-reveal d1"><Feature label="Families & Individuals" title="Wealth is personal">
              We help you uncover what yours stands for, then put it to work for the future you want to see.
            </Feature></div>
            <div className="bh-reveal d2"><Feature label="Foundations & Charities" title="Mission, fully invested">
              Your grants are only part of the picture. We align your endowment with your mission, so everything you hold moves your cause forward.
            </Feature></div>
            <div className="bh-reveal d3"><Feature label="The Next Generation" title="Prepared to lead">
              Inheriting wealth brings responsibility and the chance to lead. We prepare inheritors to steward it on their own terms.
            </Feature></div>
          </Grid>
        </Container>
      </Section>

      {/* Why Blackwell Harris — dark band */}
      <Section style={{ padding: '96px 0' }}>
        <Container>
          <div className="bh-reveal">
            <DarkFeatureBand
              label="Why Blackwell Harris"
              heading="We practise what we preach."
              body="The partners we keep and the causes we support pass the same screen we build for you. It has been that way since day one."
              actions={<Button variant="outline" href="about.html" style={{ color: 'var(--bh-on-dark)', borderColor: 'var(--bh-on-dark)' }}>About us</Button>}
            />
          </div>
        </Container>
      </Section>
    </div>
  );
}

window.HomePage = HomePage;
