import normalize from "../../normalize";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		section {
			background-color: #C3D9D9;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			text-align: center;
			padding: 5rem 0vw; 
		}
		h2 {
			margin: 0;
			font-size: 1.6rem;
		}
		.header-container {
			width: fit-content;
			heigth: fit-content;
			padding: 0.6rem 2.5rem;
			background-color: #E6F7F7;
			border-radius: 3px;
			margin-inline: auto; 
		}
		.projects-container {
			display: grid;
			padding: 0;
			padding-top: 1.5rem;
			grid-template-columns: 1fr;
			grid-gap: 2rem 0rem;
			justify-items: center;
		}
		.dark-theme {
			background-color: #006666;
		}
		.dark-header {
			background-color: #004040;
			color: white;
		}
		@media only screen and (min-width: 350px) {
			section { 
				padding-inline: 5vw;
			}
		}
		@media only screen and (min-width: 1200px) {
		
			section {
				padding-top: 6rem;
				padding-bottom: 10rem;
			}
			.projects-container {
				grid-template: 280px 280px / 700px 350px ;
				width: 1100px;
				grid-gap: 1.8rem;
				margin-inline: auto;
				margin-top: 1rem;
			}
			[long="true"] {
				grid-row: 1 / span 2;
				grid-column: 2 / 3;
			}
			.header-container > h2 {
				font-size: 1.8rem;
			}
		}
	</style>
	<section>
		<div class="header-container">
			<h2>Proyectos</h2>
		</div>
		<ul class="projects-container">
			<project-box 
				dark="false"
				stack="angular express figma tailwind typescript"
				phone-img="src/assets/projects/images/todo-phone.png"
				pc-img="src/assets/projects/images/todo-pc.png"
				view="https://todo-app-jm.netlify.app/home"
				code="https://github.com/JooseMM/angular-todo"
				>
				<span slot="title">Todo</span>
				<span slot="type">App</span>
				<span slot="description">Desarrollada para recordar pequeñas tareas personales desde cualquier dispositivo.</span>
			</project-box>
			<project-box 
				long="true"
				stack="react figma typescript"
				phone-img="src/assets/projects/images/pdf-generator-phone.png"
				pc-img="src/assets/projects/images/pdf-generator-pc.png"
				view="https://cuentas-pdf.netlify.app/"
				code="https://github.com/JooseMM/cuentas-PDF"
				>
				<span slot="title">Check</span>
				<span slot="type">Generator</span>
				<span slot="description">Genera cuentas de cobro ingresando solo datos de compra, pensado para acelerar tareas administrativas mientras trabajaba en un laboratorio dental</span>
			</project-box>
			<project-box 
				stack="php"
				phone-img="src/assets/projects/images/todo-phone.png"
				pc-img="src/assets/projects/images/todo-pc.png"
				view="https://todo-app-jm.netlify.app/home"
				code="https://github.com/JooseMM/angular-todo"
				>
				<span slot="title">Test</span>
				<span slot="type">API</span>
				<span slot="description">Desarrollada para recordar pequeñas tareas personales desde cualquier dispositivo.</span>
			</project-box>

		</ul>
		
	</section>
`;

export default class Projects extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));

	}

	static observedAttributes = ["dark"];

	connectedCallback() {
		const resetCSS = new CSSStyleSheet();
		resetCSS.replaceSync(normalize);
		this.shadowRoot?.adoptedStyleSheets.push(resetCSS);
	}
	attributeChangedCallback(_name: string, _oldValue: string, newValue: string) {
		const projects = this.shadowRoot?.querySelectorAll("project-box");
		const section = this.shadowRoot?.querySelector("section");
		const header = this.shadowRoot?.querySelector(".header-container");

		projects?.forEach((value) => value.setAttribute("dark", newValue));
		section?.classList.toggle("dark-theme", newValue === "true" ? true: false);
		header?.classList.toggle("dark-header", newValue === "true" ? true: false);

	}
}
