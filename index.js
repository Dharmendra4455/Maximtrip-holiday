let counter = 1;
const forwardhandler = () => {
  // Hide all slides first
  for (let i = 1; i <= 4; i++) {
    const slide = document.getElementById(`slide${i}`);
    if (slide) slide.style.right = "100vw";
  }
  // Show current slide
  const currentSlide = document.getElementById(`slide${counter}`);
  if (currentSlide) currentSlide.style.right = "0vw";
  counter++;
  if (counter > 4) counter = 1;
}
const prevhandler = () => {
  // Hide all slides first
  for (let i = 1; i <= 4; i++) {
    const slide = document.getElementById(`slide${i}`);
    if (slide) slide.style.right = "100vw";
  }
  // Show current slide
  const currentSlide = document.getElementById(`slide${counter}`);
  if (currentSlide) currentSlide.style.right = "0vw";
  counter--;
  if (counter < 1) counter = 4;
}
setInterval(() => {
  forwardhandler()
  
}, 3500);

//Card
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        639: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
  });
  setInterval(()=>{
    swiper.slideNext();
  }, 3000);

  //holiday packages
var swiper1 = new Swiper(".slide-content1", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        639: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
  });
  setInterval(()=>{
    swiper1.slideNext();
  }, 3500);
  //holiday packages
var swiper2 = new Swiper(".slide-content2", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        639: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
  });
  setInterval(()=>{
    swiper2.slideNext();
  }, 3000);

  // popular destination
  function hoverfun(){
    document.querySelector(".placetovisit").style.opacity="1.0";
    //document.querySelector(".placetovisit").style.pointerEvents="auto";
  }
  function removehover(){
 
    document.querySelector(".placetovisit").style.opacity="0.0";
    //document.querySelector(".placetovisit").style.pointerEvents="none";
  }