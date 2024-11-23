const templateStyle = `
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
`;

export default templateStyle;
