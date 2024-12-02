'use strict';

const navSlide = () => {
  const burger = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".navbar-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    burger.setAttribute("aria-expanded","true");
  });

  document.addEventListener('click', (e) => {
    if(e.target.className === 'navbar-links nav-active') {
        nav.classList.remove('nav-active');
        burger.classList.toggle("toggle");
        burger.setAttribute("aria-expanded","false");
    }

    if(e.target.className === 'link menu-item') {
        nav.classList.remove('nav-active');
        burger.classList.toggle("toggle");
        burger.setAttribute("aria-expanded","false");
    }
  });

  document.addEventListener('keyup', (e) => {
  	if(e.keyCode === 27) {
  	    nav.classList.remove('nav-active');
        burger.classList.toggle("toggle");
        burger.setAttribute("aria-expanded","false");
  	}
  });
};

navSlide();


