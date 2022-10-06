/* OwlCarousel */
$(document).ready(function(){
    $('.testimonial-slide').owlCarousel({
        loop:true,
        margin:80,
        nav:false,
        dots: true,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          850:{
              items:2
          }
      }
  
    })
  });