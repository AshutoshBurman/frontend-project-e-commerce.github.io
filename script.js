const hamburger = document.getElementById("hamburger")
const mobileNav = document.getElementById("mobile-nav")

hamburger.addEventListerner("click", () =>{
  mobileNav.classList.toggle("-translate-x-full")
})