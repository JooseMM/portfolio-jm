import normalize from "../../normalize";
import { githubIcon, instagramIcon, whatsappIcon } from "./icons";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		footer {
			color: white;
			background-color: #004040;
			padding-block: 5rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-alig: center;
			font-size: 1.1rem;
		}
		li:not(.title):not(.icon) {
			opacity: 0.8;
		}
		ul li {
			margin-bottom: 1.5rem;
		}
		ul {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		footer ul:not(:last-child) {
			margin-bottom: 2rem;
		}
		.title {
			font-weigth: 500;
			font-size: 1.3rem;
		}
		.icon-container {
			display: flex;
			align-items: center;
		}
		.icon-container .icon:not(:last-child) {
			margin-right: 1.5rem;
		}
		@media only screen and (min-width: 750px) {
			footer {
				flex-direction: row;
				align-items: start;
			}
			footer ul:not(:last-child) {
				margin: 0;
				margin-right: 4rem;
			}
			ul {
				align-items: start;
				text-align: left;
				justify-content: start;
			}
			ul .title {
				margin-bottom: 2.2rem;
			}
		}
	</style>
	<footer>
		<ul>
			<li class="title">
				<a href="/">Jose Moreno</a>
			</li>
			<li>© Copyright 2024</li>
		</ul>
		<ul>
			<li class="title">Secciones</li>
			<li>
				<a href="#">Inicio</a>
			</li>
			<li>
				<a href="#">Proyecto</a>
			</li>
			<li>
				<a href="#">Sobre mi</a>
			</li>
			<li>
				<a href="#">Contacto</a>
			</li>
		</ul>
		<div>
			<ul>
				<li class="title">Direccion</li>
				<li>Santiago de Chile</li>
			</ul>
			<ul>
				<li class="title">Redes Sociales</li>
				<div class="icon-container">
					<a href="#" id="wt" class="icon"></a>
					<a href="#" id="ig" class="icon"></a>
					<a href="#" id="gh" class="icon"></a>
				</div>
			</ul>
		</div>
	</footer>
`;
export default class Footer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));
	}
	connectedCallback() {
		const resetCSS = new CSSStyleSheet();
		resetCSS.replaceSync(normalize);
		this.shadowRoot?.adoptedStyleSheets.push(resetCSS);

		const whatsapp = this.shadowRoot?.querySelector("#wt");
		const instagram = this.shadowRoot?.querySelector("#ig");
		const github = this.shadowRoot?.querySelector("#gh");

		whatsapp?.replaceChildren(whatsappIcon.content.cloneNode(true));
		instagram?.replaceChildren(instagramIcon.content.cloneNode(true));
		github?.replaceChildren(githubIcon.content.cloneNode(true));
		

	}
}
