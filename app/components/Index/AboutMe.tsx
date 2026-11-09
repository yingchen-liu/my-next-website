import { Image, Link, Paragraph, Section } from "./Section";

function AboutMe() {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="md:w-2/5 mb-10 flex justify-center items-start">
          <Image
            src="/images/yingchen-linkedin.jpg"
            className="w-2/3"
            alt="Yingchen Liu"
            width={800}
            height={800}
          />
        </div>
        <div className="md:w-3/5">
          <Paragraph>
            Hi! I&apos;m Yingchen, a passionate developer specialising in web and
            mobile applications. My coding journey began in 2005 in middle
            school, when I created a friend-making platform with ASP and Access
            for a website competition and worked on football-playing and racing
            robots. Those early projects sparked my interest in technology.
          </Paragraph>
          <Paragraph>
            Most recently, I was a Senior Full-Stack Engineer at{" "}
            <Link href="https://xmind.com/">Xmind</Link>, where I worked across product
            discovery, architecture, frontend, backend, cloud infrastructure,
            AI integrations, observability, and release delivery from January
            2025 to July 2026.
          </Paragraph>
          <Paragraph>
            On <Link href="https://mapify.so/">Mapify</Link>, a platform trusted
            by 5M+ users, I&apos;ve designed search and data migrations, resilient
            speech-to-text, production observability, a multilingual newsletter
            and transactional-email engine, and an affiliate settlement system.
            I also helped take <Link href="https://hihenri.ai/">Henri</Link> from
            architecture to production across personalised learning, real-time
            AI workflows, engagement, internationalisation, and release.
          </Paragraph>
          <Paragraph>
            Alongside my full-time role, I work as an independent software
            contractor on weekend side projects. My current contribution spans{" "}
            <Link href="https://www.strengthbynumbers.com/software/">AxIT</Link>{" "}
            iOS, bringing connected strength testing to iPhone and iPad;
            AxITLib, keeping shared models, device capabilities, sampling, and
            metrics consistent across iOS and Android; and SBN Testing, giving
            the team a collaborative, auditable workspace for exact-build QA,
            evidence, and progress. This continues work I began on AxIT&apos;s
            original Android platform at{" "}
            <Link href="https://www.strengthbynumbers.com/">
              Strength By Numbers
            </Link>
            .
          </Paragraph>
          <Paragraph>
            Previously, I built generative music products at{" "}
            <Link href="https://aimi.fm">Aimi</Link>, led secure solution
            delivery for <Link href="https://optus.com.au">Optus</Link>, and
            shipped backend, mobile, cloud, and applied-AI systems for{" "}
            <Link href="https://www.airtasker.com/au/">Airtasker</Link>,
            Lendlease, {" "}
            <Link href="https://www.strengthbynumbers.com/">
              Strength By Numbers
            </Link>
            , and <Link href="https://sensilab.monash.edu/">SensiLab</Link>. I
            enjoy turning ambiguous product problems into reliable systems
            people can use.
          </Paragraph>
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
