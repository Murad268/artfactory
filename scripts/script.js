function clickHamburger(trigger, menuClass, activeClass, menuActive) {
   const button = $(trigger);
   const menu = $(menuClass);
   button.on("click", () => {
     button.toggleClass(activeClass);
     menu.toggleClass(menuActive);
   });
   $(".menu li").on("click", () => {
      button.toggleClass(activeClass);
      $(".menu").toggleClass(menuActive)
   })
 }
 
 clickHamburger(".navbar__hamburger", ".menu", "navbar__hamburger__clicked", "menu__active");
 




$('.slider').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   dots: true,
   prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
   nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
   responsive: [
      {
        breakpoint: 788,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      }
    ]
 });

 $(".acordeon").on("click", ".acordeon-cabecera", function() {
   $(this).toggleClass("active").next().slideToggle();
   $(".acordeon-cabecera i").toggleClass("active__arr");
   $(this).toggleClass("acc__title__active")
 });



 var navbar = document.querySelector('.navbar');
 
 if(window.innerWidth>992) {
   window.addEventListener('scroll', function() {
      if (window.scrollY > navbar.offsetTop) {
        this.document.querySelector(".navbar__active").style.display="block"
      } else {
        this.document.querySelector(".navbar__active").style.display="none"
      }
   });
 }

 