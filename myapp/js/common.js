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


        //   responsive: [
        //     {
        //       breakpoint: 1040,
        //       settings: {
        //         slidesToShow: 3.2,
        //         slidesToScroll: 1,
        //         infinite: true,
        //         arrows: false,
        //         dots: false
        //       }
        //     }  
        //   ]
        });


        $('a[data-slide]').click(function(e) {
            e.preventDefault();
            var slideno = $(this).data('slide');
            
            $('.tale-slider').slick('slickGoTo', slideno - 1);
        });
        
          $('.tale-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  
            console.log(nextSlide);
            if (nextSlide==5) {
                nextSlide=9;
            }
            // $('.arrow-next').click(function(e) {
            //     e.preventDefault();
            //         console.log('gfhvg');
            //     $('.tale-slider').slick('slickGoTo', 7);
            // });
            // if (nextSlide==3) {
            //     console.log('gfhvg');
            //     $('.arrow-next').click(function(e) {
            //         e.preventDefault();
                    
            //         $('.tale-slider').slick({
            //              slidesToScroll: 2
            //         });
            //     });
            // }
            
            
            // console.log ($('.slick-current.slick-active').data('slick-index'));
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
        //   responsive: [
        //     {
        //       breakpoint: 1040,
        //       settings: {
        //         slidesToShow: 3.2,
        //         slidesToScroll: 1,
        //         infinite: true,
        //         arrows: false,
        //         dots: false
        //       }
        //     }  
        //   ]
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
          /*infinite: false,*/
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





});
