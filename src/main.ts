// UI variables
const mobileMenuBtn = document.getElementById("toogleMobileBtn");
var lightTheme = localStorage.getItem("lightTheme") == 'true' ? true : false;
const decoratorCTA = document.getElementById("decoratorCTA");
const toogleModeBtn = document.getElementById("toogleDarkTheme");
const mobileMenu = document.getElementById("mobileMenu");
const lightOpenBtn = document.getElementById("lightOpenMenu");
const lightCloseBtn = document.getElementById("lightCloseMenu");
const darkOpenBtn = document.getElementById("darkOpenMenu");
const darkCloseBtn = document.getElementById("darkCloseMenu");
//functions 
function changeIconTheme(lighThemeOn: boolean):void {
  const lightIcons = document.getElementsByClassName("light-icon");
  const darkIcons = document.getElementsByClassName("dark-icon");

  if(!lighThemeOn) {
    if(mobileMenu?.classList.contains("hidden")) {
      lightOpenBtn?.classList.add("hidden");
      darkOpenBtn?.classList.remove("hidden");
    } else {
      lightCloseBtn?.classList.add("hidden");
      darkCloseBtn?.classList.remove("hidden");
    }

    for (var i = 0; i < lightIcons.length; i++) {
      lightIcons[i]?.classList.add("hidden-icon");
    }
    for (var i = 0; i < darkIcons.length; i++) {
      darkIcons[i]?.classList.remove("hidden-icon");
    }
    localStorage.setItem("lightTheme", "false");
  } else {
    if(mobileMenu?.classList.contains("hidden")) {
      lightOpenBtn?.classList.remove("hidden");
      darkOpenBtn?.classList.add("hidden");
    } else {
      lightCloseBtn?.classList.remove("hidden");
      darkCloseBtn?.classList.add("hidden");
    }
    for (var i = 0; i < darkIcons.length; i++) {
      darkIcons[i]?.classList.add("hidden-icon");
    }
    for (var i = 0; i < lightIcons.length; i++) {
      lightIcons[i]?.classList.remove("hidden-icon");
    }

    localStorage.setItem("lightTheme", "true");
  }
}

function toogleMode():void {
  //Theme switcher
  const theme = document.getElementById("theme");
  const darkBtn = document.getElementById("darkIcon");
  const lightIcon = document.getElementById("lightIcon");
  const body = document.getElementsByTagName("body");
  //header
  const logo = document.getElementById("logo");
  //hero
  const heroBtn = document.getElementById("heroBtn");
  const heroDecorator = document.getElementById("heroDecorator");
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
  //about
  const aboutDarkImg = document.getElementById("aboutDarkImage");
  const aboutLightImg = document.getElementById("aboutLightImage");

  if(theme?.classList.contains("light-on")) {
    lightTheme = false;
    theme?.classList.remove("light-on");
    theme?.classList.add("dark-on");
    darkBtn?.classList.remove("hidden-icon");
    lightIcon?.classList.add("hidden-icon");
    heroDecorator?.classList.replace("hero-light", "hero-dark");
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
    aboutDarkImg?.classList.remove("hidden");
    aboutLightImg?.classList.add("hidden");

  } else {
    lightTheme = true;
    theme?.classList.remove("dark-on");
    theme?.classList.add("light-on");
    lightIcon?.classList.remove("hidden-icon");
    darkBtn?.classList.add("hidden-icon");
    heroDecorator?.classList.replace("hero-dark", "hero-light");
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
    aboutLightImg?.classList.remove("hidden");
    aboutDarkImg?.classList.add("hidden");

  }
  changeIconTheme(lightTheme);
}

function toogleMobileMenu():void {
  console.log("click!");
  //dark mode toggle
    if(mobileMenu?.classList.contains("hidden") && !lightTheme) {
      darkOpenBtn?.classList.add("hidden");
      darkCloseBtn?.classList.remove("hidden");
      mobileMenu?.classList.replace("hidden", "showMenu");
      return
    } 
    if(!mobileMenu?.classList.contains("hidden") && !lightTheme) {
      darkOpenBtn?.classList.remove("hidden");
      darkCloseBtn?.classList.add("hidden");
      mobileMenu?.classList.replace("showMenu", "hidden");
      return
    } 
  //light mode toggle
    if(mobileMenu?.classList.contains("hidden") && lightTheme) {
      lightOpenBtn?.classList.add("hidden");
      lightCloseBtn?.classList.remove("hidden");
      darkOpenBtn?.classList.add("hidden");
      darkCloseBtn?.classList.add("hidden");
      mobileMenu?.classList.replace("hidden", "showMenu");
      return
    } 
    if(!mobileMenu?.classList.contains("hidden") && lightTheme) {
      lightOpenBtn?.classList.remove("hidden");
      lightCloseBtn?.classList.add("hidden");
      darkCloseBtn?.classList.add("hidden");
      darkOpenBtn?.classList.add("hidden");
      mobileMenu?.classList.replace("showMenu", "hidden");
      return
    } 
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

if(!lightTheme) {
  toogleMode();
}
