import Banner from "./components/Index/Banner";
import AboutMe from "./components/Index/AboutMe";
import Experiences from "./components/Index/Experiences";
import Projects from "./components/Index/Projects";
import Contact from "./components/Index/Contact";
import Footer from "./components/Index/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Yingchen Liu | Senior Full-Stack Engineer',
}

export default function HomePage() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Experiences />
      <Projects />
      <Contact />

      <Footer />
    </>
  );
}
