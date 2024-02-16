//Mobile buttons
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuBtn = document.getElementById("toogleMobileBtn");
const mobileMenuImageaBtn = document.getElementById("menuBtnImage");
//Theme switcher
var currentTheme = localStorage.getItem("currentTheme");
var darkThemeOn = currentTheme || false;
const toogleModeBtn = document.getElementById("toogleDarkTheme");
const theme = document.getElementById("theme");
const darkIcon = document.getElementById("darkIcon");
const lightIcon = document.getElementById("lightIcon");
//icons id
const exIcon = document.getElementsByClassName("exIcon");
const tsIcon = document.getElementsByClassName("tsIcon");
const tailIcon = document.getElementsByClassName("tailIcon");
const figmaIcon = document.getElementsByClassName("figmaIcon");
const reactIcon = document.getElementsByClassName("reactIcon");
const angularIcon = document.getElementsByClassName("angularIcon");
const decoratorCTA = document.getElementById("decoratorCTA");
//Current page indicative
const homePage = document.getElementById("homePage");
const contactPage = document.getElementById("contactPage");

//functions 
function changeIconTheme(darkTheme: boolean):void {
  if(darkTheme) {
    for (var i = 0; i < tsIcon.length; i++) {
      tsIcon[i].setAttribute("src", "/src/assets/icons/dark-mode/Typescript.svg");
    }
    for (var i = 0; i < exIcon.length; i++) {
      exIcon[i].setAttribute("src", "/src/assets/icons/dark-mode/Express-icon.svg");
    }
    for (var i = 0; i < figmaIcon.length; i++) {
      figmaIcon[i].setAttribute("src", "/src/assets/icons/dark-mode/figma-icon.svg");
    }
    for (var i = 0; i < tailIcon.length; i++) {
      tailIcon[i].setAttribute("src", "/src/assets/icons/dark-mode/tailwind-icon.svg");
    }
    for (var i = 0; i < reactIcon.length; i++) {
      reactIcon[i].setAttribute("src", "/src/assets/icons/dark-mode/react-icon.svg");
    }
    for (var i = 0; i < angularIcon.length; i++) {
      angularIcon[i].setAttribute("src", "/src/assets/icons/dark-mode/angular-icon.svg");
    }
    decoratorCTA?.setAttribute("src", "/src/assets/icons/dark-mode/arrow-cta.svg");
    localStorage.setItem("currentTheme", "dark");
  } else {
    for (var i = 0; i < tsIcon.length; i++) {
      tsIcon[i].setAttribute("src", "/src/assets/icons/Typescript-logo.svg");
    }
    for (var i = 0; i < exIcon.length; i++) {
      exIcon[i].setAttribute("src", "/src/assets/icons/express-logo.svg");
    }
    for (var i = 0; i < figmaIcon.length; i++) {
      figmaIcon[i].setAttribute("src", "/src/assets/icons/figma-logo.svg");
    }
    for (var i = 0; i < tailIcon.length; i++) {
      tailIcon[i].setAttribute("src", "/src/assets/icons/tailwind-logo.svg");
    }
    for (var i = 0; i < reactIcon.length; i++) {
      reactIcon[i].setAttribute("src", "/src/assets/icons/react-logo.svg");
    }
    for (var i = 0; i < angularIcon.length; i++) {
      angularIcon[i].setAttribute("src", "/src/assets/icons/angular-logo.svg");
    }
    decoratorCTA?.setAttribute("src", "/src/assets/icons/arrow-right.svg");
    localStorage.setItem("currentTheme", "light");
  }
}
function toogleMode():void {
  if(theme?.classList.contains("light-on")) {
    darkThemeOn = true;
    theme?.classList.remove("light-on");
    theme?.classList.add("dark-on");
    darkIcon?.classList.remove("hidden-icon");
    lightIcon?.classList.add("hidden-icon");
    document.getElementById("stylesheetMode")?.setAttribute("href", "./src/dark-theme.css");
  } else {
    darkThemeOn = false;
    theme?.classList.remove("dark-on");
    theme?.classList.add("light-on");
    lightIcon?.classList.remove("hidden-icon");
    darkIcon?.classList.add("hidden-icon");
    document.getElementById("stylesheetMode")?.setAttribute("href", "./src/light-theme.css");
  }
    changeIconTheme(darkThemeOn);
}
function toogleMobileMenu():void {
  if(mobileMenu?.classList.contains("hidden")) {
    mobileMenuImageaBtn?.setAttribute("src", "src/assets/icons/close-icon.svg");
    mobileMenuImageaBtn?.setAttribute("width", "22");
    mobileMenu?.classList.remove("hidden");
    mobileMenu?.classList.add("showMenu");
    return
  }
    mobileMenuImageaBtn?.setAttribute("src", "src/assets/icons/mobile-menu-btn.svg");
    mobileMenuImageaBtn?.setAttribute("width", "35");
    mobileMenu?.classList.remove("showMenu");
    mobileMenu?.classList.add("hidden");
}
function currentUrlChecker():void {
  let currentUrl = window.location.href; 
  if(currentUrl.includes("contact")) {
    contactPage?.classList.add("current-page");
    homePage?.classList.remove("current-page");
  }
  else {
    homePage?.classList.add("current-page");
    contactPage?.classList.remove("current-page");
  }
}
//event listeners
mobileMenuBtn?.addEventListener("click", toogleMobileMenu);
toogleModeBtn?.addEventListener("click", toogleMode);
//execute on start 
currentUrlChecker();
if(currentTheme === "dark") {
  toogleMode();
}
