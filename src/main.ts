//Mobile buttons
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuBtn = document.getElementById("toogleMobileBtn");
const mobileMenuImageaBtn = document.getElementById("menuBtnImage");
//Theme switcher
var darkThemeOn = false;
const toogleModeBtn = document.getElementById("toogleDarkTheme");
const theme = document.getElementById("theme");
const darkIcon = document.getElementById("darkIcon");
const lightIcon = document.getElementById("lightIcon");
//Current page indicative
const homePage = document.getElementById("homePage");
const contactPage = document.getElementById("contactPage");

//functions 
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
