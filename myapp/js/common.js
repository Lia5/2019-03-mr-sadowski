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

        // if ($('.slick-current.slick-active').data('slide')
      }

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
