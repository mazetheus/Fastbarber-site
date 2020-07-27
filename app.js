const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

const navOpen = () => {

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('open');
        hamburger.classList.toggle('close');
    });

    
}

navOpen();