const template = document.createElement("template");
template.innerHTML = `
	<section> 
		<svg id="image"></svg>
		<div class="description-container">
			<div class="header">Sobre Mi</div>
			<p>
			Me considero <b>apasionado por la tecnología</b> en general, 
			los conceptos complejos y la resolución de problemas. 
			Desde muy pequeño desperté una fascinación por los computadores,
			a tal punto que en mis tiempos libres, de manera autodidacta,
			aprendí conceptos técnicos avanzados sobre hardware y software.
			</p>
			<p>
			Actualmente, disfruto mucho de programar utilizando <b>Vim</b> como IDE y <b>Linux</b> como sistema operativo principal.
			Aparte de mi afán por lo digital, en mis tiempos libres disfruto de instrumentos musicales y el ejercicio físico.
			</p>
		</div>
	</section>
`;

export default class About extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot?.replaceChildren(template.content.cloneNode(true));
	}
	static observedAttributes = ["dark"];

	connectedCallback() {
	}
	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
	}
	setInternalTheme(darkTheme: boolean) {
	}
}
