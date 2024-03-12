$(document).ready(function(){
//Swiper-слайдер для отзывов    
  var feedbackThumbs = new Swiper('.block6-avatars', {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: false,
    freeMode: false,
    loopedSlides: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var feedbackTop = new Swiper('.block6-slider', {
    allowTouchMove: false,
    initialSlide: 1,
    loopedSlides: 3,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: feedbackThumbs,
    },    
  });

//Swiper-слайдер для портфолио
  var tabsThumbs = new Swiper('.gallery__tabs', {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: false,
    freeMode: false,
    loopedSlides: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var tabsTop = new Swiper('.gallery__photos', {
    allowTouchMove: false,
    initialSlide: 0,
    loopedSlides: 3,
    autoplay: false,
    thumbs: {
      swiper: tabsThumbs,
    },    
  });

// Обработка формы заявки
  $('#form1').submit(function() {
    if (document.form1.user_name.value === '' || document.form1.user_phone.value === '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "php/form_1_mail.php",
      data: $(this).serialize()
    }).done(function() {
      $('.').fadeIn(400).delay(2000).fadeOut(400);
      $(this).find('input').val('');
      $('#form1').trigger('reset');
    });
    return false;
  });
  
// Плавный переход
	$(function(){
        $("a[href^='#']").on('click', function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
            return false;
        });
	});

//Открыть мобильное меню
  $('.header__menu-btn, .mobile-menu__close, .menu__button-mob').on('click', function() {
    $('.mobile-menu').toggleClass('mobile-menu-active');
	  $('body').addClass('stop-scroll');
  });
  
//Закрыть мобильное меню
  $('.mobile-menu__close, .menu__button-mob').on('click', function() {
    $('body').removeClass('stop-scroll');
  });

// Обновление страницы  
  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });   
});
