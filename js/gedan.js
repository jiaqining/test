var swiper = new Swiper('.swiper-containers', {
      slidesPerView: 5,
      spaceBetween: 5,
      slidesPerGroup: 5,
      loop: true,
      loopFillGroupWithBlank: true,
	  loopAdditionalSlides: 5, 
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	  autoplay: {
	      delay: 3000,
	      stopOnLastSlide: false,
	      disableOnInteraction: true,
	      }
    });