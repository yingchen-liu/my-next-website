import { Image, Link, Paragraph, Section } from "./Section";

function AboutMe() {
  return (
    <Section id="about" title="A Little About Me">
      <div className="grid items-start gap-10 md:grid-cols-[1fr_280px] md:gap-16">
        <div>
          <Paragraph className="text-lg leading-relaxed">
            I build products across AI, web, mobile and cloud, and I enjoy owning
            the messy path from discovery to production. At{" "}
            <Link href="https://xmind.com/">Xmind</Link> I led development of{" "}
            <Link href="https://mapify.so/">Mapify</Link>, trusted by 5M+
            users, and{" "}
            <Link href="https://hihenri.ai/">Henri</Link>; as an independent
            contractor on weekend projects, I now work across{" "}
            <Link href="https://www.strengthbynumbers.com/software/">AxIT</Link>{" "}
            iOS, shared cross-platform metrics and traceable release quality.
          </Paragraph>
          <Paragraph className="mt-5 text-lg leading-relaxed">
            My coding journey started in 2005 with an ASP/Access friend-making
            website for a middle-school competition—and football-playing and
            racing robots. Since then I&apos;ve shipped products with Aimi, Optus,
            Airtasker, Lendlease,{" "}
            <Link href="https://www.strengthbynumbers.com/">
              Strength By Numbers
            </Link>{" "}
            and <Link href="https://sensilab.monash.edu/">SensiLab</Link>.
          </Paragraph>
        </div>
        <div className="mx-auto w-52 md:w-full">
          <Image
            src="/images/yingchen-linkedin.jpg"
            className="aspect-square w-full shadow-2xl shadow-black/20"
            alt="Yingchen Liu"
            width={800}
            height={800}
          />
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
