/* Slick slider carousel */

(function (){

    $('#slick').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      draggable: true,
      pauseOnHover: true,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
 
})();