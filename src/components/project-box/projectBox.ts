import normalize from "../../normalize";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		li {
			border-radius: 5px;
			background-color: #E6F7F7;
			list-style: none;
			padding: 1rem;
			max-width: 350px;
			margin-bottom: 2.5rem;
			margin-inline: auto;
		}
		a { 
			border-radius: 5px;
			padding-block: 1rem; 
			width: 48%;
			font-size: 1.1rem;
			border: #006666 solid 1px;
			letter-spacing: 1px;
		}
		#phone-img {
			transform: translateY(20px);
			margin-right: 1rem;
		}
		.code {
			border: #8AAEAE solid 1px;
			margin-left: 0.5rem;
		}
		.cta-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 1rem;
			color: #4F5A5A;
		}
		p {
			margin-top: 0.3rem;
			margin-bottom: 1rem;
			color: #4F5A5A;
		}
		.main-button {
			background-color: #006666;
			color: white;
			font-weight: 450;
		}
		.image-container {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #639999;
			overflow: hidden;
			border-radius: 5px;
		}
		.title-container {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 0.8rem;
			font-weight: 600;
		}
		.title-container > * {
			font-size: 1.5rem
		}
		.title {
			color: #006666;
		}
		.dark-title {
			color: #E09F29;
		}
		.type {
			color: #3A3C3C;
		}
		.dark-type {
			color: white;
		}
		.dark-background {
			background-color: #004040;
			padding-inline: 1.5rem;
			padding-bottom: 1.5rem;
		}
		.dark-text {
			color: #B8D2D2;
		}
		
		.dark-button {
			background-color: #E09F29;
			color: white;
		}
		.dark-code {
			border: #white solid 1px;
			color: white;
		}
		.dark-img {
			background-color: inherit;
		}
	</style>
	<li>
		<div class="image-container">
			<img id="phone-img" width="70" />
			<img id="pc-img" width="170" />
		</div>
		<div>
			<div class="title-container">
				<h3 class="title"><slot name="title">Default text</slot></h3>&nbsp;<span class="type"><slot name="type"></slot></span>
			</div>
			<p><slot name="description">Default description</slot></p>
			<skill-bar id="skill" vertical="false" dark="false"></skill-bar>
			<div class="cta-container">
				<a href="#" id="view" class="main-button">Visitar</a>
				<a href="#" id="code" class="code" >Codigo</a>
			</div>
		</div>
		
	</li>
`;

export default class ProjectBox extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
	}
	static observedAttributes = [ "dark", "vertical", "stack", "phone-img", "pc-img", "view", "code" ];

	connectedCallback() {
		const resetCSS = new CSSStyleSheet();
		resetCSS.replaceSync(normalize);
		this.shadowRoot?.adoptedStyleSheets.push(resetCSS);
	}
	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		const phone = this.shadowRoot?.querySelector("#phone-img");
		const pc = this.shadowRoot?.querySelector("#pc-img");
		const view = this.shadowRoot?.querySelector("#view");
		const code = this.shadowRoot?.querySelector("#code");

		switch(name) {
		case "dark":
			const darkTheme = newValue === "true" ? true : false;
			this.setInternalTheme(darkTheme);
			break;
		case "stack":
			this.setStackIcons(newValue);
			break;
		case "phone-img":
			phone?.setAttribute("src", newValue);
			break;
		case "pc-img":
			pc?.setAttribute("src", newValue);
			break;
		case "view":
			view?.setAttribute("href", newValue);
			view?.setAttribute("target", "_blank");
			break;
		case "code":
			code?.setAttribute("href", newValue);
			code?.setAttribute("target", "_blank");
			break;
		}

	}
	setInternalTheme(dark: boolean) {
		const stack = this.shadowRoot?.querySelector("skill-bar");
		const container = this.shadowRoot?.querySelector("li");
		const imgContainer = this.shadowRoot?.querySelector(".image-container");
		const title = this.shadowRoot?.querySelector(".title");
		const type = this.shadowRoot?.querySelector(".type");
		const paragraph = this.shadowRoot?.querySelector("p");
		const view = this.shadowRoot?.querySelector("#view");
		const code = this.shadowRoot?.querySelector("#code");

		stack?.setAttribute("dark", String(dark));
		container?.classList.toggle("dark-background", dark);
		imgContainer?.classList.toggle("dark-img", dark);
		paragraph?.classList.toggle("dark-text", dark);
		title?.classList.toggle("dark-title", dark);
		type?.classList.toggle("dark-type", dark);
		view?.classList.toggle("dark-button", dark);
		code?.classList.toggle("dark-code", dark);
	}
	setStackIcons(stack: string) {
		const stackArr = stack.split(" ");
		const skillBar = this.shadowRoot?.querySelector("skill-bar")
		console.log(stackArr);
		stackArr.forEach((item)=> skillBar?.setAttribute(item, "true"));
		console.log(skillBar);
	}
}
