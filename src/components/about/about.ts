import normalize from "../../normalize";
import templateBody from "./body";
import templateStyle from "./styles";
import lightAboutImage from "/assets/images/about-image.png";
import darkAboutImage from "/assets/images/about-image-dark.png";

const template = document.createElement("template");
template.innerHTML = templateStyle + templateBody;

export default class About extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.replaceChildren(template.content.cloneNode(true));
	}
	static observedAttributes = ["dark"];

	connectedCallback() {
		const resetCSS = new CSSStyleSheet();
		resetCSS.replaceSync(normalize);
		this.shadowRoot?.adoptedStyleSheets.push(resetCSS);
	}
	attributeChangedCallback(_name: string, _oldValue: string, newValue: string) {
		const isDark = newValue === "true" ? true : false;
		this.setInternalTheme(isDark);
	}
	setInternalTheme(darkTheme: boolean) {
		const section = this.shadowRoot?.querySelector("section");
		const aboutImage = this.shadowRoot?.querySelector("#aboutImage");
		const description = this.shadowRoot?.querySelector("#desc");
		const headerDesc = this.shadowRoot?.querySelector("#descriptionHeader");

		section?.classList.toggle("dark", darkTheme);
		description?.classList.toggle("dark-description", darkTheme);
		headerDesc?.classList.toggle("dark-description", darkTheme);
		if(darkTheme) 
			aboutImage?.setAttribute("src", darkAboutImage);
		else
			aboutImage?.setAttribute("src", lightAboutImage);


	}
}
