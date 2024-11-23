import normalize from "../../normalize";
import templateBody from "./body";
import templateStyle from "./styles";

const template = document.createElement("template");
template.innerHTML = templateStyle + templateBody ;

export default class Projects extends HTMLElement {
    constructor() {
	super();
	this.attachShadow({ mode: "open" });
	this.shadowRoot?.appendChild(template.content.cloneNode(true));
    }

    static observedAttributes = ["dark"];

    connectedCallback() {
	const resetCSS = new CSSStyleSheet();
	resetCSS.replaceSync(normalize);
	this.shadowRoot?.adoptedStyleSheets.push(resetCSS);
    }
    attributeChangedCallback(_name: string, _oldValue: string, newValue: string) {
	const projects = this.shadowRoot?.querySelectorAll("project-box");
	const section = this.shadowRoot?.querySelector("section");
	const header = this.shadowRoot?.querySelector(".header-container");

	projects?.forEach((value) => value.setAttribute("dark", newValue));
	section?.classList.toggle("dark-theme", newValue === "true" ? true: false);
	header?.classList.toggle("dark-header", newValue === "true" ? true: false);

    }
}
