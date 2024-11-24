import normalize from "../../normalize";
import { lightOnIcon, darkOnIcon, lightBurguerIcon, lightCloseIcon, darkBurguerIcon, darkCloseIcon } from "./icons";
import templateStyle from "./styles";
import templateBody from "./body";

const template = document.createElement("template");
template.innerHTML = templateStyle + templateBody;

export default class Navbar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
	}

	static observedAttributes = ["dark", "visible"];

	connectedCallback() {
		
		const resetCSS = new CSSStyleSheet();
		resetCSS.replaceSync(normalize);
		this.shadowRoot?.adoptedStyleSheets.push(resetCSS);

		this.shadowRoot?.querySelector("#menuBtn")
			?.addEventListener("click", () => {
				const toggledValue = this.getAttribute("visible") == "true" ? "false" : "true";
				this.setAttribute("visible", toggledValue);
			});

		if(localStorage.getItem("darkTheme") === "true") 
			this.setAttribute("dark", "true");

		this.shadowRoot?.querySelector("#themeBtn")
			?.addEventListener("click", () => {
				const toggledValue = this.getAttribute("dark") == "true" ? "false" : "true";
				this.setAttribute("dark", toggledValue);
				localStorage.setItem("darkTheme", toggledValue);
			});

		if(localStorage.getItem("darkTheme") === "true") 
			this.setAttribute("dark", "true");
	}

	toggleMenu(visible: boolean) {
		this.shadowRoot?.querySelector("nav")
			?.classList.toggle("hide-menu", !visible);
	}

	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		const updatedAttribute = newValue == "true" ? true : false;

		switch(name) {
			case "dark":
				const visible = this.getAttribute("visible") == "true" ? true : false;
				this.setInternalTheme(updatedAttribute, visible);
				this.setExternalThemes(updatedAttribute);
				break;
			case "visible": 
				const darkTheme = this.getAttribute("dark") == "true" ? true : false;
				this.toggleMenu(updatedAttribute);
				this.setInternalTheme(darkTheme, updatedAttribute);
				break;
		}
	}

	setInternalTheme(darkTheme: boolean, visible: boolean) {
		const themeIcon = this.shadowRoot?.querySelector("#theme");
		const header = this.shadowRoot?.querySelector("header");
		const menuIcon = this.shadowRoot?.querySelector("#menuBtn");
		const navbar = this.shadowRoot?.querySelector("nav");

		if(darkTheme) {
			if(visible) {
				menuIcon?.replaceChildren(darkCloseIcon.content.cloneNode(true));
			}
			else {
				menuIcon?.replaceChildren(darkBurguerIcon.content.cloneNode(true));
			}

			themeIcon?.replaceChildren(darkOnIcon.content.cloneNode(true));
		}
		else {
			if(visible) {
				menuIcon?.replaceChildren(lightCloseIcon.content.cloneNode(true));
			}
			else {
				menuIcon?.replaceChildren(lightBurguerIcon.content.cloneNode(true));
			}
			themeIcon?.replaceChildren(lightOnIcon.content.cloneNode(true));
		}

		themeIcon?.classList.toggle("dark-mode", darkTheme);
		header?.classList.toggle("dark-font", darkTheme);
		navbar?.classList.toggle("menu-dark-bg", darkTheme);
	}

	setExternalThemes(darkTheme: boolean) {
		const body = document.querySelector("body");
		const hero = document.querySelector("hero-section");
		const about = document.querySelector("about-section");
		const projects = document.querySelector("projects-section");
		const contact = document.querySelector("contact-section");
		
		body?.classList.toggle("dark-mode", darkTheme);
		hero?.setAttribute("dark", String(darkTheme));
		about?.setAttribute("dark", String(darkTheme));
		projects?.setAttribute("dark", String(darkTheme));
		contact?.setAttribute("dark", String(darkTheme));
	}
}
