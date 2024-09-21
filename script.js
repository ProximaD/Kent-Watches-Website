/*=============== MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/* Show Menu  */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/* Hide Menu */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== INITIALIZE SWIPER JS ===============*/
const swiperWatches = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: [-100, 0, -500],
            rotate: [0, 0, 15],
            opacity: 0
        },
        prev: {
            translate: [100, 0, -500],
            rotate: [0, 0, -15],
            opacity: 0
        },
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })

/*=============== GSAP ANIMATION ===============*/




