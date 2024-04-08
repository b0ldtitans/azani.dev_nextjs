import "./app.scss";
import dynamic from "next/dynamic";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
const Services = dynamic(() => import("./components/services/Services"));
const Portfolio = dynamic(() => import("./components/portfolio/Portfolio"));
const Contact = dynamic(() => import("./components/contact/Contact"));

export default function Home() {
  return (
    <main className="">
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <section id="Contact">
        <Contact />
      </section>
    </main>
  );
}
