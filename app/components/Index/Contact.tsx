import { Button, Paragraph, Section } from "./Section";

function Contact() {
  return (
    <Section id="contact" title="What's Next?">
      <h2 className="text-center text-7xl mb-5">Get In Touch!</h2>
      <div className="flex justify-center mb-10">
        <Paragraph className="md:w-2/3 text-center">
          I enjoy working with teams building ambitious AI, web, mobile, and
          cloud products. If you need a senior engineer who can move between
          product discovery, architecture, hands-on delivery, reliability, and
          release, let&apos;s talk.
        </Paragraph>
      </div>

      <div className="text-center">
        <Button
          href="mailto:info@yingchenliu.com"
        >
          Say Hello
          <span className="ml-3 inline-block animate-wave">
            👋
          </span>
        </Button>
      </div>
    </Section>
  );
}

export default Contact;
