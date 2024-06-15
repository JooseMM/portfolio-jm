import resetCSS from "../../normalize";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		li {
			background-color: #E6F7F7;
			border-radius: 5px;
			padding: 1rem;
			max-width: 450px;
			margin-inline: auto;
		}
		.image-container {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 5px;
			overflow: hidden;
			background-color: #639999;
			height: 160px;
		}
		#phone-img {
			position: relative;
			bottom: -20px;
			right: 5px;
		}
		#pc-img {
			position: relative;
			right: -5px;

		}
		#verticalBar {
			display: none;
		}
		.header-container > span {
			opacity: 0.86;
		}
		.cta-container {
			display: flex;
			margin-top: 0.8rem;
			justify-content: space-between;
			width: 100%;
		}
		.cta-container > a {
			display: block;
			width: 48%;
			padding-block: 1.1rem;
			border-radius: 5px;
			font-size: 1.2rem;
			font-weight: 500;
			letter-spacing: 1px;
		}
		.view {
			border: solid 1px #006666;
			background-color: #006666;
			color: white;
		}
		.code {
			border: solid 1px #8AAEAE;
			color: #596565;
		}
		.dark-code {
			color: inherit;
		}
		.header-container {
			margin-top: 0.8rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.header-container > * {
			font-size: 1.5rem;
			font-weight: 600;
		}
		h3 {
			color: #006666;
		}
		p {
			margin: 0;
			margin-top: 0.3rem;
			margin-bottom: 0.8rem;
			opacity: 0.85;
		}
		.dark-title {
			color: #E09F29;
		}
		.dark-li {
			background-color: #004040;
		}
		.dark-icontainer {
			background-color: inherit;
		}
		.dark-view {
			background-color: #E09F29;
		}
		#view[disable], #code[disable] {
			opacity: 0.5;
		}
		@media only screen and (min-width: 1200px) {
			li p {
				line-height: 1.4rem;
				letter-spacing: 0.32px;
			}
			li:not(li[long="true"]) {
				margin: 0;
				max-width: none;
				height: 280px;
				display: flex;
			}
			li:not(li[long="true"]) .image-container {
				position: relative;
				height: 100%;
				margin-right: 1rem;
				width: 43%;
			}
			li:not(li[long="true"]) #verticalBar {
				display: block;
			}
			li:not(li[long="true"]) #horizontalBar {
				display: none;
			}
			li:not(li[long="true"]) > .description {
				display: flex;
				width: 42%;
				margin-left: 1rem;
				align-items: flex-start;
				text-align: left;
				justify-content: center;
				flex-direction: column;
			}
			li:not(li[long="true"]) > .description a {
				text-align: center;
			}
			li:not(li[long="true"]) .cta-container {
				margin-top: 0;
			}
			.header-container h3, .header-container span {
				font-size: 1.8rem;
			}
			li:not([long="true"]) #phone-img {
				position: absolute;
				z-index: 10;
				width: 110px;
				top: 50%;
				right: 10px;
				transform: translateY(-50%);
			}
			li:not([long="true"]) #pc-img {
				width: 260px;
				right: auto;
			}
			li[long="true"] {
				height: 100%;
			}
			li[long="true"] .image-container {
				position: relative;
				height: 45%;
			}
			li[long="true"] #phone-img {
				width: 105px;
				position: absolute;
				z-index: 10;
				top: 50%;
				transform: translateY(-50%);
				left: 5%;
			}
			li[long="true"] #pc-img {
				width: 260px;
			}
			li[long="true"] .description > .header-container {
				margin-top: 1.2rem;
			}
			li[long="true"] .description > p {
				margin-top: 0.5rem;
				margin-bottom: 1rem;
			}
			li[long="true"] .description .cta-container {
				margin-top: 1rem;
			}
		
		}
	</style>
	<li>
		<div class="image-container">
			<img id="phone-img" width="80"/>
			<img id="pc-img" width="200"/>
		</div>
		<skill-bar id="verticalBar" vertical="true"></skill-bar>
		<div class="description">
			<div class="header-container">
				<h3><slot name="title">Title</slot></h3>
				&nbsp&nbsp
				<span><slot name="type">Type</slot></span>
			</div>
			<p><slot name="description">App description</slot></p>
			<skill-bar id="horizontalBar" vertical="false" dark="false"></skill-bar>
			<div class="cta-container">
				<a id="view" class="view">Visitar</a>
				<a id="code" class="code"/>Codigo</a>
			</div>
		</div>
		
	</li>
`;
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
