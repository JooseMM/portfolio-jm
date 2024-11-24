import resetCSS from "../../normalize";
import templateBody from "./body";
import templateStyle from "./styles";

const template = document.createElement("template");
template.innerHTML = templateStyle + templateBody;

export default class ProjectBox extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
		this.index = ProjectBox.instanceCounter++;
	}
	static observedAttributes = ["phone-img", "pc-img", "stack", "dark", "view", "code", "long" ];
	static instanceCounter = 0;
	index = 0;
	
	connectedCallback() {
		const reset = new CSSStyleSheet();
		reset.replaceSync(resetCSS);
		this.shadowRoot?.adoptedStyleSheets.push(reset);

	}

	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		switch(name) {
		case "dark":
			this.setInternalTheme(newValue);
			break;
		case "phone-img":
			this.shadowRoot?.querySelector("#" + name)
			    ?.setAttribute("src", newValue);
			break;
		case "pc-img":
			this.shadowRoot?.querySelector("#" + name)
			    ?.setAttribute("src", newValue);
			break;
		case "stack":
			this.setStack(newValue);
			break;
		case "long":
			if(newValue)
				this.shadowRoot?.querySelector("li")
					?.setAttribute("long", "true");
			break;
		case "view":
			const view = this.shadowRoot?.querySelector("#view");
			if(newValue === "none") {
				view?.toggleAttribute("disable", true);
				break;
			}
			view?.setAttribute("href", newValue);
			view?.setAttribute("target", "_blank");
			break;
		case "code":
			const code = this.shadowRoot?.querySelector("#code");
			if(newValue === "none") {
				view?.toggleAttribute("disable", true);
				break;
			}
			code?.setAttribute("href", newValue);
			code?.setAttribute("target", "_blank");
			break;
		}
	}
	setStack(str: string) {
		const stackBars = this.shadowRoot?.querySelectorAll("skill-bar");
		const stackArr = str.split(" ");

		stackArr.forEach((value)=> {
			stackBars?.forEach((bar)=> {
				bar.setAttribute(value, "true");
			});
		});
	}
	setInternalTheme(dark: string) {
		const isDark = dark === "true" ? true : false;
		const stackBars = this.shadowRoot?.querySelectorAll("skill-bar");
		const icontainer = this.shadowRoot?.querySelector(".image-container");
		const ctaCode = this.shadowRoot?.querySelector(".code");
		const container = this.shadowRoot?.querySelector("li");
		const title = this.shadowRoot?.querySelector("h3");
		const cta = this.shadowRoot?.querySelector("#view");

		stackBars?.forEach((value)=> value.setAttribute("dark", dark));
		container?.classList.toggle("dark-li", isDark);
		icontainer?.classList.toggle("dark-icontainer", isDark);
		title?.classList.toggle("dark-title", isDark);
		cta?.classList.toggle("dark-view", isDark);
		ctaCode?.classList.toggle("dark-code", isDark);
		

	}
	
}
