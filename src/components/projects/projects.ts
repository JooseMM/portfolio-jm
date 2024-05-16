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
		h3 {
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
	</style>
	<section>
		<div class="header-container">
		<h3>Proyectos</h3>
		</div>
		<div class="projects-container">

		</div>
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
	}
	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
	}
}
