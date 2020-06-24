const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const nav = document.querySelector('.nav-links');

const tl = gsap.timeline();

tl.fromTo(hero, 1, {height: "0%"}, {height:'80%', ease: Power2.easeInOut})
.fromTo(hero, 0.5, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 0.5, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=0.5")
.fromTo(logo, 0.5, {opacity: 0, x:30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(hamburger, 0.5, {opacity: 0, x:30}, {opacity: 1, x: 0}, "-=0.5")

const navSlide = () => {
    const navLinks = document.querySelectorAll('.nav-links li');

    
    hamburger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
        hamburger.classList.toggle('open');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });

    
}

navSlide();