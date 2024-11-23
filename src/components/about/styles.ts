const templateStyle = `
<style>
    section {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-inline: 1.5rem;
	padding-block: 5rem;
	justify-content: center;
    }
    h3 {
	margin: 0;
	padding: 0;
    }
    p {
	opacity: 0.85;
	line-height: 1.4rem;
    }
    p:not(:last-child) {
	margin-bottom: 1rem;
    }
    b {
	opacity: 1;
    }
    .description, .header {
	background-color: #C3D9D9;
	border-radius: 5px;
    }
    .description {
	margin-top: 1.2rem;
	padding: 1.5rem;
	max-width: 500px;
    }
    .header {
	padding: 0.5rem 2.5rem;
	margin-top: 2rem;
	margin-inline: auto;
	width: fit-content;
	font-size: 1.1rem;
    }
    .dark {
	background-color: #004040;
	color: white;
    }
    .dark-description {
	background-color: #006666;
    }
    @media only screen and (min-width: 600px) {
	.description {
	    padding: 1.5rem 2.5rem;
	}
    }
    @media only screen and (min-width: 1000px) {
	section {
	    flex-direction: row;
	    padding-block: 4.5rem;
	    margin-inline: 10vw;
	    justify-conter: start;
	    align-items: center;
	    text-align: start;
	}
	section img {
	    width: 400px;
	}
	.description-container {
	    margin: 0;
	    margin-left: 3rem;
	    font-size: 1.1rem;
	}
	.description {
	    padding: 1.8rem 2.5rem;
	    max-width: 600px;
	}
	.header {
	    margin: 0;
	    margin-inline: 0;
	    font-size: 1.3rem;
	}
    }
</style>
`;

export default templateStyle;
