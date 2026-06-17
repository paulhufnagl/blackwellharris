/* Blackwell Harris — About page body. */
const { Container, Section, SectionHead, PageHero, Feature, Grid,
        Button, TextLink, MonoLabel, MediaFrame, DarkFeatureBand } = window.BHShared;

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title="Your wealth can carry your principles."
        lead="Blackwell Harris has built portfolios for positive impact and financial return from the beginning, and we have proven the two can grow together."
        actions={<Button variant="primary" href="contact.html">Start a conversation</Button>}
      />

      {/* Mission */}
      <Section style={{ background: 'var(--bh-soft-stone)', padding: '96px 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div className="bh-reveal">
              <MonoLabel style={{ marginBottom: 20 }}>Our mission</MonoLabel>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 500, lineHeight: 1.18, letterSpacing: '-0.4px', color: 'var(--text-primary)', margin: 0 }}>
                To grow our clients' wealth over the long term and direct it toward the
                social and environmental change they want to see.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', margin: '28px 0 0', maxWidth: 520 }}>
                Finance has many of the problems of our time. Yet it can also fund the
                answers. By holding ourselves to high standards of transparency and
                accountability, we want to show the wider industry what wealth stewardship
                can be.
              </p>
            </div>
            <div className="bh-reveal d1">
              <MediaFrame src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?fm=jpg&q=80&w=1400&auto=format&fit=crop" alt="Mist lifting over rolling hills at first light" ratio="4 / 3" radius="lg" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Why We Exist */}
      <Section style={{ padding: '96px 0' }}>
        <Container>
          <SectionHead label="Why we exist" title="The challenges in front of us are urgent." />
          <div className="bh-reveal" style={{ maxWidth: 680, marginBottom: 48 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.6, color: 'var(--text-primary)', margin: 0 }}>
              A warming climate, widening inequality, ecosystems under strain. Many of the
              solutions already exist. What they lack is capital — because a system tuned for
              short-term gains rarely funds long-term resilience. This is where wealth holders
              have real power. When our clients align their capital with their principles,
              money moves toward solving these problems.
            </p>
          </div>
          <Grid min={240} gap={28}>
            <div className="bh-reveal d1"><Feature card icon="thermometer-sun" label="Climate">A warming world demands patient capital aimed at the transition.</Feature></div>
            <div className="bh-reveal d2"><Feature card icon="scale" label="Inequality">Widening gaps that markets, left alone, are not built to close.</Feature></div>
            <div className="bh-reveal d3"><Feature card icon="leaf" label="Ecosystems">Natural systems under strain, and worth more intact than spent.</Feature></div>
          </Grid>
        </Container>
      </Section>

      {/* The Change We Seek — dark band */}
      <Section style={{ padding: '0 0 96px' }}>
        <Container>
          <div className="bh-reveal">
            <DarkFeatureBand
              label="The change we seek"
              heading="Family by family, the whole system shifts."
              body="Strong returns for our clients, and a measurable contribution to the world they live in. Clients of Blackwell Harris see exactly what their wealth earned and what it did — from emissions avoided to communities served. We are playing the long game: every family that invests this way is evidence that it works."
              actions={<Button variant="outline" href="impact.html" style={{ color: 'var(--bh-on-dark)', borderColor: 'var(--bh-on-dark)' }}>See our impact</Button>}
            />
          </div>
        </Container>
      </Section>
    </div>
  );
}

window.AboutPage = AboutPage;
