import { Image, Link, Paragraph, Section } from "./Section";

function AboutMe() {
  return (
    <Section id="about" title="A Little About Me">
      <div className="grid items-start gap-10 md:grid-cols-[1fr_280px] md:gap-16">
        <div>
          <Paragraph className="text-lg leading-relaxed">
            I solve product problems end to end—from user experience and app
            code to backend, cloud and shared engines. On{" "}
            <Link href="https://www.strengthbynumbers.com/software/">AxIT</Link>,
            I use Kotlin Multiplatform to keep one calculation contract aligned
            across iOS, Android, Connect web and backend services. At{" "}
            <Link href="https://www.aimi.fm/">Aimi</Link>, I led a portable C++
            generative-music engine and cross-platform SDK, then founded the
            Android team around that shared core.
          </Paragraph>
          <Paragraph className="mt-5 text-lg leading-relaxed">
            I also improve how teams ship. At{" "}
            <Link href="https://xmind.com/">Xmind</Link>, I led development of{" "}
            <Link href="https://mapify.so/">Mapify</Link>, trusted by 5M+ users,
            and <Link href="https://hihenri.ai/">Henri</Link> while making CI,
            pre-release and testing workflows faster and clearer. That journey
            began in 2005 with an ASP/Access friend-making website and
            football-playing and racing robots, and later included Optus,
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
