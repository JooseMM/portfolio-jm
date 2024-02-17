// UI variables
const mobileMenuBtn = document.getElementById("toogleMobileBtn");
var currentTheme = localStorage.getItem("currentTheme");
const decoratorCTA = document.getElementById("decoratorCTA");
const toogleModeBtn = document.getElementById("toogleDarkTheme");
const mobileMenu = document.getElementById("mobileMenu");

//functions 
function changeIconTheme(darkTheme: boolean):void {
  const lightIcons = document.getElementsByClassName("light-icon");
  const darkIcons = document.getElementsByClassName("dark-icon");

  if(darkTheme) {
    for (var i = 0; i < lightIcons.length; i++) {
      lightIcons[i]?.classList.add("hidden-icon");
    }
    for (var i = 0; i < darkIcons.length; i++) {
      darkIcons[i]?.classList.remove("hidden-icon");
    }

    localStorage.setItem("currentTheme", "dark");
  } else {
    for (var i = 0; i < darkIcons.length; i++) {
      darkIcons[i]?.classList.add("hidden-icon");
    }
    for (var i = 0; i < lightIcons.length; i++) {
      lightIcons[i]?.classList.remove("hidden-icon");
    }

    localStorage.setItem("currentTheme", "light");
  }
}

function toogleMode():void {
  //Theme switcher
  var darkThemeOn = currentTheme || false;
  const theme = document.getElementById("theme");
  const darkBtn = document.getElementById("darkIcon");
  const lightIcon = document.getElementById("lightIcon");
  const body = document.getElementsByTagName("body");
  //header
  const logo = document.getElementById("logo");
  //hero
  const heroBtn = document.getElementById("heroBtn");
  const heroSecondBtn = document.getElementById("heroSecondBtn");
  const mainHeader = document.getElementById("mainHeader");
  const lightDecorator = document.getElementById("light-decorator");
  const darkDecorator = document.getElementById("dark-decorator");
  const textHighlight = document.querySelectorAll("b");
  const boxHeader = document.querySelectorAll("h3");
  const stack = document.getElementsByClassName("stack");
  //projects
  const projects = document.getElementById("projectSection");
  const aboutText = document.getElementById("aboutText");
  const secondHeader = document.getElementsByClassName("header-ct");
  const projectBox = document.getElementsByClassName("project-box");
  const projectBtn = document.getElementsByClassName("main-cta-btn");
  const projectSecondBtn = document.getElementsByClassName("second-cta-btn");
  const projectBgImg = document.getElementsByClassName("box-image-ct");

  if(theme?.classList.contains("light-on")) {
    darkThemeOn = true;
    theme?.classList.remove("light-on");
    theme?.classList.add("dark-on");
    darkBtn?.classList.remove("hidden-icon");
    lightIcon?.classList.add("hidden-icon");
    //change bg and font colors
    for(var i = 0; i < body.length; i ++){
      body[i].classList.replace("light-font-80", "dark-font-80");
      body[i].classList.replace("light-main-bg", "dark-main-bg");
    }
    //header
    logo?.classList.replace("light-font-100", "dark-font-100");
    //hero
    heroBtn?.classList.replace("light-btn-bg", "dark-btn-bg");
    mainHeader?.classList.replace("light-font-100", "dark-font-100");
    heroSecondBtn?.classList.replace("light-font-80", "dark-font-100");
    lightDecorator?.classList.add("hidden-icon");
    darkDecorator?.classList.remove("hidden-icon");
    //projects
    projects?.classList.replace("light-alt-bg", "dark-dark-teal-bg");
    for(var i = 0; i < textHighlight.length; i ++){
      textHighlight[i].classList.replace("light-text-highlight", "dark-text-highlight");
    }
    for(var i = 0; i < stack.length; i ++){
      stack[i].classList.replace("light-stack-bg", "dark-stack-bg");
    }
    for(var i = 0; i < projectBox.length; i ++){
      projectBox[i].classList.replace("light-main-bg", "dark-main-bg");
    }
    for(var i = 0; i < projectBtn.length; i ++){
      projectBtn[i].classList.replace("light-btn-bg", "dark-btn-bg");
    }
    for(var i = 0; i < projectSecondBtn.length; i ++){
      projectSecondBtn[i].classList.replace("light-btn-bg", "dark-btn-bg");
    }
    for(var i = 0; i < projectBgImg.length; i ++){
      projectBgImg[i].classList.replace("light-md-teal-bg", "dark-main-bg");
    }
    for(var i = 0; i < secondHeader.length; i ++){
      secondHeader[i].classList.replace("light-main-bg","dark-main-bg");;
      secondHeader[i].classList.replace("light-alt-bg","dark-dark-teal-bg");;
      secondHeader[i].classList.replace("light-font-100","dark-font-100");;
    }
    for(var i = 0; i < boxHeader.length; i ++){
      boxHeader[i].classList.add("dark-font-100");;
    }
    aboutText?.classList.replace("light-alt-bg", "dark-dark-teal-bg");
    mobileMenu?.classList.replace("light-alt-bg", "dark-alt-bg");
    mobileMenu?.classList.replace("light-menu-border", "dark-menu-border");

  } else {
    darkThemeOn = false;
    theme?.classList.remove("dark-on");
    theme?.classList.add("light-on");
    lightIcon?.classList.remove("hidden-icon");
    darkBtn?.classList.add("hidden-icon");
    //change bg and font colors light theme
    for(var i = 0; i < body.length; i ++){
      body[i].classList.replace("dark-font-80", "light-font-80");
      body[i].classList.replace("dark-main-bg", "light-main-bg");
    }
    //header
    logo?.classList.replace("dark-font-100", "light-font-100");
    mobileMenu?.classList.replace("dark-alt-bg", "light-alt-bg");
    mobileMenu?.classList.replace("dark-menu-border", "light-menu-border");
    //hero
    mainHeader?.classList.replace("dark-font-100", "light-font-100");
    heroBtn?.classList.replace("dark-btn-bg", "light-btn-bg");
    heroSecondBtn?.classList.replace("dark-font-100", "light-font-80");
    lightDecorator?.classList.remove("hidden-icon");
    darkDecorator?.classList.add("hidden-icon");
    //projects
    projects?.classList.replace("dark-dark-teal-bg", "light-alt-bg");
    for(var i = 0; i < textHighlight.length; i++){
      textHighlight[i].classList.replace("dark-text-highlight", "light-text-highlight");
    }
    for(var i = 0; i < projectBox.length; i++){
      projectBox[i].classList.replace("dark-main-bg", "light-main-bg");
    }
    for(var i = 0; i < projectBtn.length; i++){
      projectBtn[i].classList.replace("dark-btn-bg", "light-btn-bg");
    }
    for(var i = 0; i < stack.length; i++){
      stack[i].classList.replace("dark-stack-bg", "light-stack-bg");
    }
    for(var i = 0; i < boxHeader.length; i++){
      boxHeader[i].classList.remove("dark-font-100");;
    }
    for(var i = 0; i < projectBgImg.length; i++){
      projectBgImg[i].classList.replace("dark-main-bg", "light-md-teal-bg");
    }
    for(var i = 0; i < secondHeader.length; i++){
      secondHeader[i].classList.replace("dark-main-bg","light-main-bg");;
      secondHeader[i].classList.replace("dark-dark-teal-bg","light-alt-bg");;
      secondHeader[i].classList.replace("dark-font-100","light-font-100");;
    }
    aboutText?.classList.replace("dark-dark-teal-bg", "light-alt-bg");

  }
  changeIconTheme(darkThemeOn);
}

function toogleMobileMenu():void {
  const mobileMenuImageaBtn = document.getElementById("menuBtnImage");
  if(mobileMenu?.classList.contains("hidden")) {
    mobileMenuImageaBtn?.setAttribute("src", "src/assets/icons/close-icon.svg");
    mobileMenuImageaBtn?.setAttribute("width", "22");
    mobileMenu?.classList.replace("hidden", "showMenu");
    return
  } 
  mobileMenuImageaBtn?.setAttribute("src", "src/assets/icons/mobile-menu-btn.svg");
  mobileMenuImageaBtn?.setAttribute("width", "35");
    mobileMenu?.classList.replace("showMenu", "hidden");
}

function currentUrlChecker():void {
  const homePage = document.getElementById("homePage");
  const contactPage = document.getElementById("contactPage");
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
function checkSize():void {
  const width = window.innerWidth;
  if(width < 1000) {
    mobileMenu?.classList.add("hidden");
  }
}
//event listeners
mobileMenuBtn?.addEventListener("click", toogleMobileMenu);
toogleModeBtn?.addEventListener("click", toogleMode);
window.addEventListener("resize", checkSize);
//execute on start 
currentUrlChecker();
checkSize();

if(currentTheme === "dark") {
  toogleMode();
}
