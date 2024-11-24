import normalize from "../../normalize";
import { whatsapp, github, linkedin, mail } from "./icons";
import templateBody from "./body";
import templateStyle from "./styles";
import darkAboutImage from "/assets/images/about-image-dark.png";
import lightboutImage from "/assets/images/about-image.png";

const template = document.createElement("template");
template.innerHTML = templateStyle + templateBody;

export default class Contact extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
		this.setIcons();
	}

	static observedAttributes = ["dark"];
	connectedCallback() {
		const resetCSS = new CSSStyleSheet();
		resetCSS.replaceSync(normalize);
		this.shadowRoot?.adoptedStyleSheets.push(resetCSS);
	}
	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		const isDarkTheme = newValue === "true" ? true : false;
		if(name === "dark")
			this.setInternalTheme(isDarkTheme);

	}
	setInternalTheme(darkTheme: boolean) {
		const container = this.shadowRoot?.querySelector(".contact-container");
		const hero = this.shadowRoot?.querySelector("#heroImage");

		container?.classList.toggle("dark-container", darkTheme);
		if(darkTheme)
			hero?.setAttribute("src", darkAboutImage);
		else 
			hero?.setAttribute("src", lightboutImage);
	}
	setIcons() {
		const mailSelector = this.shadowRoot?.querySelector("#mail");
		const githubSelector = this.shadowRoot?.querySelector("#github");
		const whatsappSelector = this.shadowRoot?.querySelector("#whatsapp");
		const linkedinSelector = this.shadowRoot?.querySelector("#linkedin");

		mailSelector?.replaceChildren(mail.cloneNode(true));
		githubSelector?.replaceChildren(github.cloneNode(true));
		whatsappSelector?.replaceChildren(whatsapp.cloneNode(true));
		linkedinSelector?.replaceChildren(linkedin.cloneNode(true));
		
	}
}
