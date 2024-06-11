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
			padding-bottom: 4rem;
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
		.description-container {
			margin-top: 1rem;
			max-width: 300px;
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
			font-size: 1rem;
		}
		.cta-button {
			margin-right: 1.2rem;
			color: white;
			padding: 0.8rem 1.5rem;
			border-radius: 5px;
			letter-spacing: 1px;
			background-color: #006666;
		}
		.container-decorator {
			opacity: 0.9;
			position: relative;
		}
		.dark-button {
			background-color: #E0A029;
		}
		.skills {
			margin-top: 2rem;
			width: 290px;
		}
		span {
			position: absolute;
			right: 0;
			top: 100%;
		}
		.image-container img {
			width: 280px;
		}
		@media only screen and (min-width: 380px) {
			.image-container img {
				width: 320px;
			}
			.skills {
				width: 350px;
			}
		}
		@media only screen and (min-width: 700px) {
			.description-container {
				font-size: 1.2rem;
				width: 400px;
			}
			.description-container h1 {
				font-size: 3rem;
			}
			.image-container img {
				width: 350px;
			}	
			.cta-container {
				font-size: 1.3rem;
			}
			span {
				top: 80%;
			}
		}
		@media only screen and (min-width: 1000px) {
			section {
				flex-direction: row-reverse;
				margin-inline: 5vw;
			}
			.description-container {
				margin-top: 0;
				margin-right: 10vw;
				align-items: start;
				font-size: 1.2rem;
				text-align: left;
				width: 450px;
			}
			.description-container p {
				width: 350px;
			}
			.description-container h1 {
				font-size: 3.5rem;
			}
			.image-container img {
				width: 480px;
			}
			span {
				top: 70%;
			}
			.skills {
				margin-top: 1.5rem;
			}
		}
		@media only screen and (min-width: 1440px) {
			.image-container img {
				width: 550px;
			}
			.description-container {
				margin-right: 5wv;
			}
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
				<a class="cta-button " href="/contact.html" >Contratame</a>
				<div class="container-decorator">
					<a href="#projectSection">Proyectos</a>
					<span id="decorator"></span>
				</div>
			</div>
				<skill-bar 
					class="skills"
					typescript="true"
					figma="true"
					react="true"
					express="true"
					angular="true"
					tailwind="true"
					dark="false"
					vertical="false"
				>
				</skill-bar>
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
