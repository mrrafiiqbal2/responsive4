 jQuery(function($) {
  $(document).ready( function() {

 $('#counter-block').ready(function(){
        $('.pro').animationCounter({
          start: 0,
          step: 8,
          delay:100,
          end: 548
        });
         $('.hour').animationCounter({
          start: 0,
          step: 30,
          delay:100,
          end: 1465
        });
          $('.fee').animationCounter({
          start: 0,
          step: 10,
          delay:100,
          end: 612
        });
            $('.cli').animationCounter({
          start: 0,
          step: 15,
          delay:100,
          end: 755
        });
       
    });

            // owl carousel plugin linking here
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:false,
    autoplay:Boolean,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

          });
              });