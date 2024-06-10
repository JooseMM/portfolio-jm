import CTA from "./components/cta/cta";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import ProjectBox from "./components/project/project";
import Contact from "./components/contact/contact";

customElements.define("navbar-section", Navbar);
customElements.define("hero-section", Hero);
customElements.define("cta-section", CTA);
customElements.define("footer-section", Footer);
customElements.define("about-section", About);
customElements.define("projects-section", Projects);
customElements.define("project-box", ProjectBox);
customElements.define("skill-bar", Skills);
customElements.define("contact-section", Contact);
