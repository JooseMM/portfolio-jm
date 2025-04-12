import { icons } from "./icons";
import resetCSS from "../../normalize";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		.list {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			background-color: #BECCCC;
			border-radius: 10px;
			height: 100%;
			padding-inline: 1.2rem;
			padding-top: 0.8rem;
			padding-bottom: 0.5rem;
		}
		li:not(:last-child) {
			margin-right: 0.5rem;
		}
		.vertical {
			flex-direction: column;
			padding: 1rem 0.5rem;
			justify-content: center;
			align-items: center;
		}
		.vertical li:not(:last-child) {
			margin:0;
			margin-bottom: 0.8rem;
		}
		.dark {
			background-color: #4C8080;
		}
		.list > .fix-figma {
			margin-left: 0.5rem;
			margin-right: 0.8rem;
		}
		.list > .fix-react {
			margin-right: 0.8rem;
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
  static observedAttributes = [
    "angular",
    "tailwind",
    "react",
    "typescript",
    "figma",
    "php",
    "sql",
    "html",
    "css",
    "express",
    "mongodb",
    "dark",
    "vertical",
    "net",
  ];

  connectedCallback() {
    const reset = new CSSStyleSheet();
    reset.replaceSync(resetCSS);
    this.shadowRoot?.adoptedStyleSheets.push(reset);
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    if (name === "dark") {
      const darkTheme = newValue === "true" ? true : false;
      this.setInternalTheme(darkTheme);
    }
  }
  checkSkills(): string[] {
    let skills: string[] = [];

    Skills.observedAttributes.forEach((key: string) => {
      const value = this.getAttribute(key) == "true" ? true : false;
      if (this.hasAttribute(key) && value && key != "dark" && key != "vertical")
        skills.push(key);
    });

    return skills;
  }
  setIcon(skillName: string, darkTheme: boolean) {
    const list = this.shadowRoot?.querySelector("ul");
    var icon: DocumentFragment;
    const listItem = document.createElement("li");
    const vertical = this.getAttribute("vertical") == "true" ? true : false;

    if (darkTheme) icon = icons.get("dark_" + skillName)?.content!;
    else icon = icons.get("light_" + skillName)?.content!;

    if (skillName === "figma" && !vertical) listItem.classList.add("fix-figma");
    if (skillName === "react" && !vertical) listItem.classList.add("fix-react");

    listItem.replaceChildren(icon.cloneNode(true));
    list?.appendChild(listItem!.cloneNode(true));
  }
  setInternalTheme(darkTheme: boolean): void {
    const resetNode = document.createElement("ul");
    const oldList = this.shadowRoot?.querySelector("ul");
    const vertical = this.getAttribute("vertical") == "true" ? true : false;
    const skills = this.checkSkills();

    resetNode.classList.toggle("dark", darkTheme);
    resetNode.classList.toggle("vertical", vertical);
    resetNode.classList.add("list");
    resetNode.setAttribute("vertical", vertical ? "true" : "false");
    oldList?.replaceWith(resetNode);
    skills.forEach((skillName) => this.setIcon(skillName, darkTheme));
  }
}
