const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
});


jQuery(document).on('ready', function() {
    jQuery(".center").slick({
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    mobileFirst:true,
                responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 765,
                  settings: {
                  slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                
                  {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 340,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
              ]
      
    });
      
  });



