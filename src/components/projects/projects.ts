const template = document.createElement("template");
template.innerHTML = `
	<style>
		section {
			background-color: #E6F7F7;
			display: grid;

		}
	</style>
	<section>
		
	</section>
`;

export default class Projects extends HTMLElement {
	constructor() {
		super();
	}

	static observedAttributes = ["dark"];

	connectedCallback() {
	}
	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
	}
}
