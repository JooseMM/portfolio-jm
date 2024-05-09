import resetCSS from "../../normalize";
import { darkArrowRightIcon, lightArrowRightIcon } from "./icons";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		section {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-inline: 10vw;
		}
		p {
			opacity: 0.85;
		}
		.image-container, .description-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
		}
		.image-container {
			margin-top: 1rem;
		}
		.description-container h1 {
			font-size: 2.5rem;
			font-weight: 400;
		}
		.description-container p {
			margin-top: 0.5rem;
		}
		b {
			opacity: 1;
		}
		h1 b {
			opacity: 1;
			color: #006666;
		}
		h1 > .dark-highlight, p > .dark-highlight {
			color: #E09F29;
		}
		.cta-container {
			display: flex;
			justify-content: center;
			margin-top: 1.3rem;
			align-items: baseline;
			font-weight: 500;
		}
		.cta-button {
			margin-right: 1.2rem;
			color: white;
			font-size: 1rem;
			padding: 0.8rem 1.5rem;
			border-radius: 5px;
			letter-spacing: 1px;
			background-color: #006666;
		}
		.cta-container div {
			opacity: 0.9;
			position: relative;
		}
		.dark-button {
			background-color: #E0A029;
		}
		span {
			position: absolute;
			right: 0;
			bottom: -80%;
		}
	

	</style>
	<section>
		<div class="image-container">
			<img src="src/assets/images/hero-image.png" width="350" alt="retrato de jose"/>
		</div>
		<div class="description-container">
			<h1>Soy <b id="hHeader">Jose</b>, Frontend Dev.</h1>
			<p>¡Hola! Mi nombre es <b id="hParagraph">Jose Moreno</b>, un desarrollador web autodidacta, con bases fuertes en diseño de UI UX.</p>
			<div class="cta-container">
				<a class="cta-button " href="#" >Contratame</a>
				<div>
					<a href="#">Proyectos</a>
					<span id="decorator"></span>
				<div>
			</div>

		</div>
	</section>
`;

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

		if(dark) {
			decorator?.replaceChildren(darkArrowRightIcon.content.cloneNode(true));
		}
		else {
			decorator?.replaceChildren(lightArrowRightIcon.content.cloneNode(true));
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
