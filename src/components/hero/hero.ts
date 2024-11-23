import resetCSS from "../../normalize";
import { darkArrowRightIcon, lightArrowRightIcon } from "./icons";
import templateStyle from "./styles";
import templateBody from "./body";

const template = document.createElement("template");
template.innerHTML = templateStyle + templateBody;

export default class Hero extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
	}
	static observedAttributes = ["dark"];

	connectedCallback() {
		const reset = new CSSStyleSheet();

		reset.replaceSync(resetCSS);
		this.shadowRoot?.adoptedStyleSheets.push(reset);


	}
	setInternalTheme(dark: boolean) {
		const highlighHeader = this.shadowRoot?.querySelector("#hHeader");
		const highlighParagraph = this.shadowRoot?.querySelector("#hParagraph");
		const cta = this.shadowRoot?.querySelector(".cta-button");
		const decorator = this.shadowRoot?.querySelector("#decorator");
		const skill = this.shadowRoot?.querySelector("skill-bar");

		if(dark) {

			decorator?.replaceChildren(darkArrowRightIcon.content.cloneNode(true));
			skill?.setAttribute("dark", "true");
		}
		else {
			decorator?.replaceChildren(lightArrowRightIcon.content.cloneNode(true));
			skill?.setAttribute("dark", "false");
		}

		highlighHeader?.classList.toggle("dark-highlight", dark);
		highlighParagraph?.classList.toggle("dark-highlight", dark);
		cta?.classList.toggle("dark-button", dark);
	}
	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {

		if(name == "dark") {
			const dark = newValue == "true" ? true : false;
			this.setInternalTheme(dark);
		}
	}
}
