$(document).ready(function(){

	
	/* 부드럽게 스크롤 */
 	$('a.page-scroll').bind('click', function(event) {
		event.preventDefault();
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top)
		}, 1250, 'easeInOutExpo');
	});
	
	/* lnb */
	$('.m_btn').on('click', function(event) {
		event.preventDefault();
		if($(this).hasClass('active')) {
			$('.m_btn').removeClass('active');
		} else {
			$('.m_btn').addClass('active');
		}
		$('.cont01 .snb ul').toggle();
	});
	
	
  
	
	$('.top_btn a').click('click', function(event) {
		event.preventDefault();
		$('html, body').stop().animate({scrollTop: 0}, 1000);
	});	
	
	/* gnb 호버 */
   $('.gnb li > a')
    .on('mouseenter', function(e) {
	var parentOffset = $(this).offset(),
	relX = e.pageX - parentOffset.left,
	relY = e.pageY - parentOffset.top;
	$(this).find('span').css({top:relY, left:relX})
    })
	.on('mouseout', function(e) {
	var parentOffset = $(this).offset(),
	relX = e.pageX - parentOffset.left,
	relY = e.pageY - parentOffset.top;
	$(this).find('span').css({top:relY, left:relX})
	});
	
	/* mobile slick */
	
	$(window).resize(function (){   
	// width값을 가져오기
	var width_size = window.outerWidth;
	if (width_size <= 665 ) {
	$(".port_box").addClass("m_port_box");
	} else {
	$(".port_box").removeClass("m_port_box");
	$('.cont01 .snb ul').show();
	}

	}).resize();
	
	
	//header include
	$("#header").load("inc/header_index.html");

	
    //main cont swiper
    var mySwiper = new Swiper('.main_swiper', {
       
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        simulateTouch:false, // touch 방지
        speed: 1000,
        fadeEffect: {
            crossFade: true
        },
        parallax: true,
        effect: 'slide', // 페이드 효과 사용
        loop: true, // 무한 반복

        grabCursor: true,
        paginationClickable: true,
        parallax: true,
        mousewheelControl: 1,
        pagination: {
            el: '.swiper-pagination',
			type: 'fraction',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: { // 네비게이션 설정
            nextEl: '.swiper-button-next', // 다음 버튼 클래스명
            prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
        },


	});
	
	//*** scroll event ***//
	$(window).scroll(function() {
		var hdHeight = $('.header').height();
		var mainHeight = $('.main_vis').height();
		var windowTop = $(window).scrollTop();
		// header scroll
		if(windowTop >= hdHeight) {
			$('.header').addClass('scroll');
		} else {
			$('.header').removeClass('scroll');
		}

		// main_vis scroll
		if(windowTop >= mainHeight) {
			$('.header').addClass('black');
		} else {
			$('.header').removeClass('black');
		}

		var sumheight = $(".main_vis").outerHeight() + $(".projects").outerHeight();
		var sumaboutheight = sumheight + $(".aboutme1").outerHeight();
		var scrollBottom = $(window).scrollTop() + $(window).height();
		if(windowTop >= sumheight) {
			$(".ab_left").addClass("fixed");
		} else {
			$(".ab_left").removeClass("fixed");
		}

		if (scrollBottom >= sumaboutheight) {
			$(".ab_left").removeClass("fixed");
			$(".ab_left").addClass("bottom");
		} else {
			$(".ab_left").removeClass("bottom");

		}


		// progressbar
		var checkBottom = scrollBottom - 100; // 위에서부터 active 실행
		
		// :not(.active).active-on-view => `active` 라는 클래스를 가지고 있지 않고 `active-on-view` 라는 클래스를 가지고 있는 엘리먼트 검색
		$(':not(.active).skill').each(function(index, ele) {
			var percentNum = $(ele).children().children('div').attr("data-percent")+"%";
			if (checkBottom > $(ele).offset().top ) {
				$(ele).addClass("active");
				$(ele).children().children(".skill_percent").css("width",percentNum);
				$(ele).children().children(".skill_percent").children().text(percentNum);
			}
		});




	});
	
		
	//project swiper
	var galleryThumbs = new Swiper('.project_thumbs', {
		spaceBetween: 10,
		slidesPerView: 1,
		// loop: true,
		effect: 'fade',
		freeMode: true,
		draggable: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		touchRatio: 0,
	});
	
	var galleryTop = new Swiper('.project_swiper', {
		spaceBetween: 20,
		slidesPerView: 3,
		centeredSlides: true,
		// loop:true,
		draggable: true,
		navigation: {
			nextEl: '.sec_perf .swiper-button-next',
			prevEl: '.sec_perf .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});

	/*
	$('.project_slide').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed:5000,
		pauseOnHover: true,
		//fade: true,
		// infinite: false,
		asNavFor: '.project_thumbs'
	});
	$('.project_thumbs').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.project_slide',
		arrows: false,
		focusOnSelect: true,
	});


	*/
	$('.slick-button-pause').on('click', function() {
		galleryTop.autoplay.stop();
		$('.slick-button-pause').hide();
		$('.slick-button-play').show();

		
	});
	
	$('.slick-button-play').on('click', function() {
		galleryTop.autoplay.start();
		$('.slick-button-play').hide();
		$('.slick-button-pause').show();
	});
	 
	$('.project_img').mouseover(function() {
		var thumbsHeight = $(this).height();
		var imgHeight = $(this).children().height();
		var hoverHeight = imgHeight - thumbsHeight;

		$(this).children('img').css('transform', 'translateY(-' + hoverHeight +'px)');
	});

	$('.project_img').mouseout(function() {
		$(this).children('img').css('transform', 'none');

	});


	// skill slider
	$('.skill_info').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		// fade: true,
		dots: true,
		dotsClass: 'slide_dot',
		arrows: false,
		focusOnSelect: true,
		// customPaging: function(Slide, i) {
		// 	var ii = i + 1;
		// 	var datad = $('.project_slide .cl'+ii).data('dot');

		// 	return '<a>'+datad+'</a>'
		// },
	});


	// qna
	$(document).on("click", ".qna .list .item .question", function(e) {
		e.preventDefault();
		$(".qna .list .item .question").removeClass("open");
		$(".qna .list .item .answer").removeClass("open").slideUp();
		$(this).addClass("open");
		$(this).siblings(".answer").addClass("open").stop().slideDown();
	});

	$(document).on("click", ".qna .list .item .question.open", function(e) {
		e.preventDefault();
		$(this).removeClass("open");
		$(this).siblings(".answer").addClass("open").stop().slideUp();
	});


	


});



