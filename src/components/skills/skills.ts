import { lightAngular, lightFigma, lightReact, lightExpress, lightTailwind , lightTypescript } from "./icons";
import { darkFigma, darkReact, darkAngular, darkExpress, darkTailwind, darkTypescript } from "./icons";
import resetCSS from "../../normalize";

const template = document.createElement("template");
template.innerHTML = `
	<ul>
		<li id="angular">
		</li>
		<li id="react">
		</li>
		<li id="tailwind">
		</li>
		<li id="express">
		</li>
		<li id="typescript">
		</li>
		<li id="figma">
		</li>
	</ul>`;
	// add php to the list
export default class skils extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
	}
	static observedAttributes = ["angular", "react", "typescript", "figma", "express", "dark"];

	connectedCallback() {
		const reset = new CSSStyleSheet();

		reset.replaceSync(resetCSS);
		this.shadowRoot?.adoptedStyleSheets.push(reset);
		}

	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		if(name != "dark" && newValue == "true") {
			}
	}
	setInternalTheme(dark: boolean) {

		if(dark) {
		}
		else {
		}
	}


}
