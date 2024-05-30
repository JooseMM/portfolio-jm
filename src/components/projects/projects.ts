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
			padding: 5rem 10vw;
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
			padding-top: 1.5rem;
			display: grid;
			grid-template-columns: 1fr;
			width: 100%;
		}
		.dark-theme {
			background-color: #006666;
		}
		.dark-header {
			background-color: #004040;
			color: white;
		}
	</style>
	<section>
		<div class="header-container">
			<h2>Proyectos</h2>
		</div>
		<ul class="projects-container">
			<project-box 
				stack="angular express figma tailwind"
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
				stack="react figma typescript"
				phone-img="src/assets/projects/images/pdf-generator-phone.png"
				pc-img="src/assets/projects/images/pdf-generator-pc.png"
				view="https://cuentas-pdf.netlify.app/"
				code="https://github.com/JooseMM/cuentas-PDF"
				>
				<span slot="title">Check</span>
				<span slot="type">Generator</span>
				<span slot="description">Aplicación pensada para acelerar la creación de cuentas de cobro en formato PDF</span>
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

		projects?.forEach((child) => child.setAttribute("dark", newValue));
		section?.classList.toggle("dark-theme", newValue === "true" ? true: false);
		header?.classList.toggle("dark-header", newValue === "true" ? true: false);

	}
}
