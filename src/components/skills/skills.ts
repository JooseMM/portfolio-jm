import { icons } from "./icons";
import resetCSS from "../../normalize";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		.list {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			background-color: #BECCCC;
			border-radius: 10px;
			height: 100%;
			padding: 0.5rem 0.8rem;
		}
		
		.vertical {
			flex-direction: column;
			padding: 1rem 0.5rem;
		}
		.dark {
			background-color: #4C8080;
		}

	</style>
	<ul>
	</ul>`;
	// add php to the list
export default class Skills extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
	}
	static observedAttributes = ["angular","tailwind", "react", "typescript", "figma", "express", "dark", "vertical"];
	
	connectedCallback() {
		const reset = new CSSStyleSheet();
		reset.replaceSync(resetCSS);
		this.shadowRoot?.adoptedStyleSheets.push(reset);
	}

	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		if(name === "dark") {
			const darkTheme = newValue === "true" ? true : false;
			this.setInternalTheme(darkTheme);
		}
	}
	checkSkills():string[] {
		let skills:string[] = [];

		Skills.observedAttributes.forEach((key: string)=> {
			const value = this.getAttribute(key) == "true" ? true : false;
			if(this.hasAttribute(key) && value && key != "dark" && key != "vertical")
				skills.push(key);
		})

		return skills;
	}
	setIcon(skillName: string, darkTheme: boolean) {
		const list = this.shadowRoot?.querySelector("ul");
		var icon: DocumentFragment;

		if(darkTheme) 
			icon = icons.get("dark_" + skillName)?.content!;
		else
			icon = icons.get("light_" + skillName)?.content!;

		list?.appendChild(icon!.cloneNode(true));
	}
	setInternalTheme(darkTheme: boolean):void {
		const resetNode = document.createElement("ul");
		const list = this.shadowRoot?.querySelector("ul");
		const vertical = this.getAttribute("vertical") == "true" ? true : false;
		const skills = this.checkSkills();

		resetNode.classList.toggle("dark", darkTheme);
		resetNode.classList.toggle("vertical", vertical);
		resetNode.classList.add("list");

		resetNode.setAttribute("vertical", vertical ? "true" : "false" );
		list?.replaceWith(resetNode);
		skills.forEach((skillName) => this.setIcon(skillName, darkTheme));
	}
	
}
