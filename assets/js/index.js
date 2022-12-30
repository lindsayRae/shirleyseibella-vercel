"use strict"
console.log("heard")

const myNav = document.getElementById('myNav');
window.onscroll = function () {

  if (window.pageYOffset > 100) {
    console.log("remove trasparent")
    myNav.classList.remove('navbar-transparent');
    document.getElementById("navBarLogo").src="assets/logo/bella-logo-black-800x146.png"; 
  } else {
    console.log("add trasparent")
    myNav.classList.add('navbar-transparent');
    document.getElementById("navBarLogo").src="assets/logo/bella-logo-white-800x146.png"; 
  }
};


