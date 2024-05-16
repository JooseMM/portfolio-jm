import CTA from "./components/cta/cta";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import About from "./components/about/about";

customElements.define("navbar-section", Navbar);
customElements.define("hero-section", Hero);
customElements.define("skill-bar", Skills);
customElements.define("cta-section", CTA);
customElements.define("projects-section", Projects);
customElements.define("footer-section", Footer);
customElements.define("about-section", About);
