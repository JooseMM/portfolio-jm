import sunIcon from "./sunIcon.svg";
import moonIcon from "./moonIcon.svg";

const templateStyle = `
<style>
    header {
	display: flex;
	position: relative;
	align-items: center;
	margin-inline: 10vw;
	justify-content: space-between;
	padding-block: 2rem;
    }
    header > a:first-child {
	margin-right: 2.5rem;
	font-size: 1.2rem;
	font-weight: 500;
    }
    nav {
	position: absolute;
	top: 100%;
	left: 50%;
	z-index: 100;
	transform: translateX(-50%);
	padding: 4rem 5.5rem;
	border-radius: 10px;
	border: 1px solid #619F9F;
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
	font-size: 1.3rem;
	    background-color: #C3D9D9;
    }
    ul {
	display: flex;
	align-items: center;
	flex-direction: column;
    }
    li {
	margin-bottom: 3rem;
    }
    .mode  {
	display: flex;
	align-items: baseline;
	background-color: #639999;
	background-image: url(${sunIcon}), url(${moonIcon});
	background-size: 28px;
	background-repeat: no-repeat;
	padding: 5px; 
	width: 90px;
	background-position: 14px center, 48px center;
	border-radius: 1.5rem;
    }
    .mode  > div {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	padding: 0.1rem;
	width: 40px;
	height: 40px;
	background-color: #004040;
	transition:ease-in-out 300ms;
    }
    .dark-mode {
	transform: translateX(39px);
    }
    .hide-menu {
	display: none;
    }
    .menu-dark-bg {
	background-color: #006666;
    }

    @media only screen and (min-width: 500px) {
	nav {
	    right: 0;
	    left: none;
	    transform: translateX(0);
	}
    }

    @media only screen and (min-width: 1000px) {
	    a:not(#logo) {
		    opacity: 0.85;
	    }
	    a:not(#logo):hover {
		    opacity: 1;
	    }
	    .hide-menu {
		    display: flex;
	    }
	    header {
		    align-items: baseline;
	    }
	    nav {
		    position: static;
		    flex-direction: row;
		    align-items: baseline;
		    justify-content: space-between;
		    padding: 0;
		    border: none;
		    background-color: inherit;
		    font-size: 1rem;
	    }
	    ul {
		    flex-direction: row;
		    align-items: baseline;
	    }
	    li {
		    margin: 0;
	    }
	    li:not(:last-child) {
		    margin-right: 2.5rem;
	    }
	    #menuBtn {
		    display: none;
	    }
	    .menu-dark-bg {
		    background-color: inherit;
	    }
    }
</style>
`;

export default templateStyle;
