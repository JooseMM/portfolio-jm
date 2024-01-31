//UI variables states
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuBtn = document.getElementById('themeSwitcher');

//functions 
function toogleMobileMenu():void {
  if(mobileMenu?.classList.contains("hidden")) {
    mobileMenu?.classList.remove("hidden");
    mobileMenu?.classList.add("showMenu");
    return
  }
    mobileMenu?.classList.remove("showMenu");
    mobileMenu?.classList.add("hidden");
}

//event listeners
mobileMenuBtn?.addEventListener("click", toogleMobileMenu)
