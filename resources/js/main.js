const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}));


// owl carousel
$('.about-grid').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        601:{
            items:2
        },
        800:{
            items:3
        }
    }
});



$('.tm-grid').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        900:{
            items:1
        }
    }
});


// Wow js animation

