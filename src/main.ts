//UI variables states
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuBtn = document.getElementById("toogleMobileBtn");
const mobileMenuImageaBtn = document.getElementById("menuBtnImage");

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

//event listeners
mobileMenuBtn?.addEventListener("click", toogleMobileMenu)
