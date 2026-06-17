/* Blackwell Harris — Contact page body. */
const { Container, Section, PageHero, MonoLabel, Button, MediaFrame } = window.BHShared;

const fieldLabel = { fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 7, display: 'block' };
const fieldBox = {
  fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.5, color: 'var(--text-primary)',
  background: 'var(--bh-white)', border: '1px solid var(--bh-card-border)', borderRadius: 'var(--radius-xs)',
  padding: '12px 14px', width: '100%', boxSizing: 'border-box',
};

const CONTACT_EMAIL = 'contact@blackwellharris.com';

function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get('name') || '').toString().trim();
    const subject = encodeURIComponent(`Website enquiry${name ? ` from ${name}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name') || ''}\n` +
      `Email: ${data.get('email') || ''}\n` +
      `Enquiring as: ${data.get('enquiry') || ''}\n\n` +
      `${data.get('message') || ''}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <div style={{ background: 'var(--bh-white)', border: '1px solid var(--bh-card-border)', borderRadius: 'var(--radius-lg)', padding: 40 }}>
      <MonoLabel style={{ marginBottom: 18 }}>Send a message</MonoLabel>
      {sent ? (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--bh-success)', margin: 0 }}>
          Thank you — your message is with us. We reply personally, usually within two working days.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <label style={fieldLabel} htmlFor="c-name">Name</label>
            <input id="c-name" name="name" style={fieldBox} placeholder="Your name" required />
          </div>
          <div>
            <label style={fieldLabel} htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" style={fieldBox} placeholder="you@example.com" required />
          </div>
          <div>
            <label style={fieldLabel} htmlFor="c-enq">I am enquiring as…</label>
            <select id="c-enq" name="enquiry" style={{ ...fieldBox, appearance: 'none', backgroundImage: 'linear-gradient(45deg, transparent 50%, var(--bh-muted-slate) 50%), linear-gradient(135deg, var(--bh-muted-slate) 50%, transparent 50%)', backgroundPosition: 'calc(100% - 20px) 19px, calc(100% - 14px) 19px', backgroundSize: '6px 6px, 6px 6px', backgroundRepeat: 'no-repeat' }} defaultValue="">
              <option value="" disabled>Please choose…</option>
              <option>A family or an individual</option>
              <option>A foundation or charity</option>
              <option>An adviser</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label style={fieldLabel} htmlFor="c-msg">Message</label>
            <textarea id="c-msg" name="message" rows={5} style={{ ...fieldBox, resize: 'vertical', minHeight: 120 }} placeholder="A little about your family and what you hope to preserve."></textarea>
          </div>
          <div style={{ marginTop: 4 }}>
            <Button type="submit" variant="primary">Submit</Button>
          </div>
        </form>
      )}
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <Section style={{ padding: '80px 0 96px' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56, alignItems: 'start' }}>
            {/* Left: title, text, image, details */}
            <div className="bh-reveal">
              <MonoLabel style={{ marginBottom: 22 }}>Reach out</MonoLabel>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5.4vw, 64px)', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-1px', color: 'var(--text-primary)', margin: 0 }}>
                We'd be glad to meet you.
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.6, color: 'var(--text-muted)', margin: '24px 0 36px', maxWidth: 480 }}>
                Operating from Antwerp and Chicago, we work with families across Europe and the United States.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
                <MediaFrame src="assets/co1.png" alt="Antwerp's Grote Markt and Brabo fountain at night" ratio="4 / 3" radius="lg" caption="Antwerp, Belgium" />
                <MediaFrame src="assets/ch1.png" alt="Cloud Gate and the Chicago skyline in Millennium Park" ratio="4 / 3" radius="lg" caption="Chicago, USA" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 32 }}>
                <div>
                  <MonoLabel style={{ marginBottom: 12 }}>Address</MonoLabel>
                  <address style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-primary)', fontStyle: 'normal' }}>
                    Borsbeeksebrug 22<br />2600 Antwerp, Belgium
                    <br /><br />
                    333 W Wolf Point Plaza<br />Chicago, IL 60654, USA
                  </address>
                </div>
                <div>
                  <MonoLabel style={{ marginBottom: 12 }}>Contact</MonoLabel>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-primary)' }}>
                    <a href="mailto:contact@blackwellharris.com" style={{ color: 'var(--text-accent)', textDecoration: 'none' }}>contact@blackwellharris.com</a><br />
                    <a href="tel:+3238085692" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>+32 3 808 56 92</a><br />
                    <a href="tel:+17737396164" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>+1 773 739 6164</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bh-reveal d1"><ContactForm /></div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

window.ContactPage = ContactPage;
