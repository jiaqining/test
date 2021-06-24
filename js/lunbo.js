var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 5,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
	  loopAdditionalSlides: 2, 
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