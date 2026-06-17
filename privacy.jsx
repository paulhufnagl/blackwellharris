/* Blackwell Harris — Privacy Policy page body. Long-form legal document. */
const { Container, Section, PageHero, MonoLabel, TextLink } = window.BHShared;

const DOC_MAX = 760;
const H2 = ({ children }) => (
  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.8vw, 30px)', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.3px', color: 'var(--text-primary)', margin: '52px 0 0', maxWidth: DOC_MAX }}>{children}</h2>
);
const H3 = ({ children }) => (
  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: 'var(--text-primary)', margin: '30px 0 0', maxWidth: DOC_MAX }}>{children}</h3>
);
const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.75, color: 'var(--text-primary)', margin: '16px 0 0', maxWidth: DOC_MAX }}>{children}</p>
);
const UL = ({ items }) => (
  <ul style={{ margin: '16px 0 0', paddingLeft: 22, maxWidth: DOC_MAX, display: 'flex', flexDirection: 'column', gap: 12 }}>
    {items.map((it, i) => (
      <li key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--text-primary)' }}>{it}</li>
    ))}
  </ul>
);

function PrivacyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How Blackwell Harris collects, uses, and protects the information you share with us."
      />

      <Section style={{ padding: '8px 0 96px' }}>
        <Container>
          <div className="bh-reveal" style={{ maxWidth: DOC_MAX }}>
            <MonoLabel tone="muted" style={{ marginBottom: 4 }}>Effective June 2026</MonoLabel>

            <P>At Blackwell Harris, accessible from www.blackwellharris.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Blackwell Harris and how we use it.</P>
            <P>If you have additional questions or require more information about our Privacy Policy, do not hesitate to <TextLink href="contact.html">contact us</TextLink>.</P>
            <P>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Blackwell Harris. This policy is not applicable to any information collected offline or via channels other than this website.</P>

            <H2>Consent</H2>
            <P>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</P>

            <H2>Information we collect</H2>
            <P>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</P>
            <P>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</P>
            <P>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</P>

            <H2>How we use your information</H2>
            <P>We use the information we collect in various ways, including to:</P>
            <UL items={[
              'Provide, operate, and maintain our website',
              'Improve, personalize, and expand our website',
              'Understand and analyze how you use our website',
              'Develop new products, services, features, and functionality',
              'Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes',
              'Send you emails',
              'Find and prevent fraud',
            ]} />

            <H2>Log Files</H2>
            <P>Blackwell Harris follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</P>

            <H2>Cookies and Web Beacons</H2>
            <P>Like any other website, Blackwell Harris uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</P>
            <P>For more general information on cookies, please read “What Are Cookies” from Cookie Consent.</P>

            <H2>Third Party Privacy Policies</H2>
            <P>Blackwell Harris's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</P>
            <P>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</P>

            <H2>Third Party Cookies</H2>
            <H3>Google Analytics (Google LLC)</H3>
            <P>Google Analytics is a web analysis service provided by Google LLC (“Google”). Google utilizes the Data collected to track and examine the use of this Website, to prepare reports on its activities and share them with other Google services.</P>
            <P>Google may use the Data collected to contextualize and personalize the ads of its own advertising network. Personal Data processed: Tracker and Usage Data.</P>
            <P>Place of processing: Belgium – Privacy Policy – Opt Out.</P>

            <H2>CCPA Privacy Rights (Do Not Sell My Personal Information)</H2>
            <P>Under the CCPA, among other rights, California consumers have the right to:</P>
            <UL items={[
              "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
              'Request that a business delete any personal data about the consumer that a business has collected.',
              "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.",
            ]} />
            <P>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please <TextLink href="contact.html">contact us</TextLink>.</P>

            <H2>GDPR Data Protection Rights</H2>
            <P>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</P>
            <UL items={[
              <><strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>The right to access</strong> — You have the right to request copies of your personal data. We may charge you a small fee for this service.</>,
              <><strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>The right to rectification</strong> — You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</>,
              <><strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>The right to erasure</strong> — You have the right to request that we erase your personal data, under certain conditions.</>,
              <><strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>The right to restrict processing</strong> — You have the right to request that we restrict the processing of your personal data, under certain conditions.</>,
              <><strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>The right to object to processing</strong> — You have the right to object to our processing of your personal data, under certain conditions.</>,
              <><strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>The right to data portability</strong> — You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</>,
            ]} />
            <P>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please <TextLink href="contact.html">contact us</TextLink>.</P>

            <H2>Children's Information</H2>
            <P>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</P>
            <P>Blackwell Harris does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</P>
          </div>
        </Container>
      </Section>
    </div>
  );
}

window.PrivacyPage = PrivacyPage;
