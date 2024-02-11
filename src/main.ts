//UI variables states
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuBtn = document.getElementById("toogleMobileBtn");
const mobileMenuImageaBtn = document.getElementById("menuBtnImage");
const toogleModeBtn = document.getElementById("toogleDarkTheme");
const themeImg = document.getElementById("themeImg");
const theme = document.getElementById("theme");

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
    themeImg?.setAttribute("src", "src/assets/icons/moon-switch.svg");
    theme?.classList.remove("light-on");
    theme?.classList.add("dark-on");
  } else {
    themeImg?.setAttribute("src", "src/assets/icons/sun-switch.svg");
    theme?.classList.remove("dark-on");
    theme?.classList.add("light-on");
  }
}

//event listeners
mobileMenuBtn?.addEventListener("click", toogleMobileMenu)
toogleModeBtn?.addEventListener("click", toogleMode)
