$(function() {

    if(jQuery('.tale-slider').length) {
        $('.tale-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: true,
          dots: false,
          prevArrow: '<div class="arrow-prev"></div>',
          nextArrow: '<div class="arrow-next"></div>'
        });


        $('a[data-slide]').click(function(e) {
            e.preventDefault();
            var slideno = $(this).data('slide');
            var pic = $(this).data('pic');
            $('.tale-slider').slick('slickGoTo', slideno - 1);
            $('.choise1').attr('src', "img/tale/tale"+pic+".jpg");
            var pic2 = $(this).data('pic');
            $('.choise2').attr('src', "img/tale/tale"+pic2+".jpg");
            var giftName = $(this).data('gift');
            $('.choise3').attr('value', giftName);
            $('.choise-gift').html('Оставьте, пожалуйста, свои данные, чтобы я смог с вами связаться и передать подарок');
        });
        
          $('.tale-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  
            console.log(nextSlide);
            if (nextSlide==5) {
                nextSlide=9;
            }
          });

    }
    if(jQuery('.calc__slider').length) {
        $('.calc__slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
          prevArrow: '<div class="arrow-prev"></div>',
          nextArrow: '<div class="arrow-next"></div>'
        });
    }
    //start note slider
        var rev = $('.rev_slider');
        rev.on('init', function(event, slick, currentSlide) {
          var
            cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();
          prev.addClass('slick-sprev');
          next.addClass('slick-snext');
          cur.removeClass('slick-snext').removeClass('slick-sprev');
          slick.$prev = prev;
          slick.$next = next;
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
          console.log('beforeChange');
          var
            cur = $(slick.$slides[nextSlide]);
          console.log(slick.$prev, slick.$next);
          slick.$prev.removeClass('slick-sprev');
          slick.$next.removeClass('slick-snext');
          next = cur.next(),
            prev = cur.prev();
          prev.prev();
          prev.next();
          prev.addClass('slick-sprev');
          next.addClass('slick-snext');
          slick.$prev = prev;
          slick.$next = next;
          cur.removeClass('slick-next').removeClass('slick-sprev');
        });
        
        rev.slick({
          speed: 1000,
          arrows: true,
          dots: false,
          focusOnSelect: true,
          // prevArrow: '<button> prev</button>',
          // nextArrow: '<button> next</button>',
          infinite: true,
          centerMode: true,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0',
          swipe: true,
          customPaging: function(slider, i) {
            return '';
          },
        });
//end note slider        

  //anhor-menu
  $('.main-menu a').on('click', function(e){
    var dataName = $(this).attr('data-menuAnchor');
    e.preventDefault();
    var id = $('[data-anchor="'+ dataName + '"]');
    $('html,body').stop().animate({ scrollTop: $(id).offset().top }, 1000);
  });

});



document.addEventListener('DOMContentLoaded', function(){
//menu
    var menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-toggle');
        navGamb.classList.toggle('active');
    });
//tabs
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.header__tabs > li");
    function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
        var anchorReference = tabClickEvent.target;
        console.log(anchorReference);
        var activePaneId = anchorReference.getAttribute("href");
        console.log(activePaneId);
        var activePane = document.querySelector(activePaneId);
        console.log(activePaneId);
		activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}

 // MAP
      
 ymaps.ready(init);
 function init(){     
   var myMap = new ymaps.Map("map", {
         center: [56.327780, 43.995018],
         zoom: 14
     }),
     
     // Создаем метку с помощью вспомогательного класса.
     myPlacemark1 = new ymaps.Placemark([56.327780, 43.995018], {
     // Свойства.
     // Содержимое иконки, балуна и хинта.
     balloonContentBody: 'Mr. Sadowski ',
     balloonContentFooter: 'г. Нижний Новгород, ул.Почаинская, 13А',
     hintContent: 'Mr. Sadowski '
 }, {
     // Опции.
     // Своё изображение иконки метки.
     iconLayout: 'default#imageWithContent',
     iconImageHref: '../img/icons/marker.png',
    //  // Размеры метки.
     iconImageSize: [57, 78]
 });
    


 // Добавляем все метки на карту.
 myMap.geoObjects.add(myPlacemark1);
 // myMap.behaviors.disable('scrollZoom');

 };





});
