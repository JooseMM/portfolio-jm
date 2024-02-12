//UI variables states
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuBtn = document.getElementById("toogleMobileBtn");
const mobileMenuImageaBtn = document.getElementById("menuBtnImage");
const toogleModeBtn = document.getElementById("toogleDarkTheme");
const theme = document.getElementById("theme");
const darkIcon = document.getElementById("darkIcon");
const lightIcon = document.getElementById("lightIcon");

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
    theme?.classList.remove("light-on");
    theme?.classList.add("dark-on");
    darkIcon?.classList.remove("hidden-icon");
    lightIcon?.classList.add("hidden-icon");
  } else {
    theme?.classList.remove("dark-on");
    theme?.classList.add("light-on");
    lightIcon?.classList.remove("hidden-icon");
    darkIcon?.classList.add("hidden-icon");
  }
}

//event listeners
mobileMenuBtn?.addEventListener("click", toogleMobileMenu)
toogleModeBtn?.addEventListener("click", toogleMode)
