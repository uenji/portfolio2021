$(document).ready(function(){

	
	/* 부드럽게 스크롤 */
 	$('a.page-scroll').bind('click', function(event) {
		event.preventDefault();
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top)
		}, 1250, 'easeInOutExpo');
	});
	
	
	$('.top_btn a').click('click', function(event) {
		event.preventDefault();
		$('html, body').stop().animate({scrollTop: 0}, 1000);
	});	
	
	//include
	// $("#header").load("/portfolio2021/inc/header_index.html");
	$("#footer").load("/portfolio2021/inc/footer.html");
	
	//ham menu
	$(document).on("click", ".ham_button", function() {
		$(".mobile_menu").addClass("open");
		$(".ham_button").addClass("active");
	});

	$(document).on("click", ".ham_button.active", function() {
		$(".mobile_menu").removeClass("open");
		$(".ham_button").removeClass("active");
	});

	$(".mobile_menu .gnb ul > li > a").click(function() {
		$(".mobile_menu").removeClass("open");
		$(".ham_button").removeClass("active");
	});

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
			$(".left_fixed").show();
		} else {
			$('.header').removeClass('scroll');
			$(".left_fixed").hide();
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

		//main polygon
		var scroll = $(this).scrollTop(),
		$item1 = $('.poly1'),
		$item2 = $('.poly2'),
		$item3 = $('.poly3'),
		$item4 = $('.poly4'),
		$item5 = $('.poly5'),
		$item6 = $('.poly6');
		
		$item1.css({'transform': 'translate3d(' + 0 + 'px, ' + scroll * 0.07+ 'px, ' + 0 + 'px )'});
		$item2.css({'transform': 'translate3d(' + 0 + 'px, ' + scroll * 0.02+ 'px, ' + 0 + 'px )'});

		$item3.css({'transform': 'translate3d(' + 0 + 'px, ' + scroll * -0.04+ 'px, ' + 0 + 'px )'});
		$item4.css({'transform': 'translate3d(' + 0 + 'px, ' + scroll * -0.02+ 'px, ' + 0 + 'px )'});

		$item5.css({'transform': 'translate3d(' + 0 + 'px, ' + scroll * -0.02+ 'px, ' + 0 + 'px )'});
		$item6.css({'transform': 'translate3d(' + 0 + 'px, ' + scroll * -0.01+ 'px, ' + 0 + 'px )'});

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
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        speed: 500,
		// loop:true,
		draggable: true,
		navigation: {
			nextEl: '.sec_perf .swiper-button-next',
			prevEl: '.sec_perf .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
		breakpoints: {
			1400: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1200: {
				slidesPerView: 2,
				spaceBetween: 50
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 40
			}
		}
	});

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
		var imgHeight = $(this).children().children().height();
		var hoverHeight = imgHeight - thumbsHeight;

		$(this).children().children('img').css('transform', 'translateY(-' + hoverHeight +'px)');
	});

	$('.project_img').mouseout(function() {
		$(this).children().children('img').css('transform', 'none');

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
		responsive: [ 
			{ 
				breakpoint: 1400, 
				settings: { 
					slidesToShow: 3, 
				} 
			}, 
			{ 
				breakpoint: 768, 
				settings: { 
					slidesToShow: 1, 
					fade:true
				} 
			}, 
		]
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

	$(document).on("mousemove",function(e) {  
		var pl1 = $(".poly1");
		var pl2 = $(".poly2");
		var pl3 = $(".poly3");
		var pl4 = $(".poly4");
		var pl5 = $(".poly5");
		var pl6 = $(".poly6");
	});



	// sub page
	$(window).scroll(function() {
		var windowTop = $(window).scrollTop();
		var sub_vis = $(".sub .main_vis").height();
		var sub_header = $(".header").height();
		if(windowTop >= sub_vis) {
			$(".portfolio_wrap .sort_btn").addClass("fixed");
		} else {
			$(".portfolio_wrap .sort_btn").removeClass("fixed");
		}
	});

	$(window).resize(function (){   
		// width값을 가져오기
		var width_size = window.outerWidth;
		// mouse cursor
		if (width_size >= 768) {
// 
			// 브라우저 확인
			var agent = navigator.userAgent.toLowerCase();
			// ie11
			if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
				
				// if (window.NodeList && !NodeList.prototype.forEach) {
				// 	NodeList.prototype.forEach = Array.prototype.forEach;
				// }

				// ie > 크로스브라우징 문제로 인해 hide
				document.getElementById("cursor").style.display = "none";
			}
			
			// chrome
			if (agent.indexOf("chrome") != -1) {

				let mouseCursor = document.querySelector(".cursor");
				let navLinks = document.querySelectorAll(".gnb li a"); 
				let cursorLinks = document.querySelectorAll(".cursor_hover"); // 호버링크
				let projectLinks = document.querySelectorAll(".project_thumbs .more_btn"); 
				let projectLinks2 = document.querySelectorAll(".portfolio_item"); 
				//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
				window.addEventListener("scroll", cursor);
				window.addEventListener("mousemove", cursor);
				//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴

				function cursor(e) {
				mouseCursor.style.left = e.pageX + 5 + "px";
				mouseCursor.style.top = e.pageY - scrollY + 5 + "px";
				};

				// 임의링크 호버시
				cursorLinks.forEach(function(link) {
					link.addEventListener("mouseover", function() {
					mouseCursor.classList.add("active");
					});
					link.addEventListener("mouseleave", function() {
					mouseCursor.classList.remove("active");
					});
				});

				// projectLinks
				projectLinks.forEach(function(link) {
					link.addEventListener("mouseover", function() {
					mouseCursor.classList.add("thumbs_active");
					});
					link.addEventListener("mouseleave", function() {
					mouseCursor.classList.remove("thumbs_active");
					});
				});

				// gnb 메뉴 
				navLinks.forEach(function(link) {
					link.addEventListener("mouseover", function() {
					mouseCursor.classList.add("active");
					});
					link.addEventListener("mouseleave", function() {
					mouseCursor.classList.remove("active");
					});
				});

				// 메인 프로젝트 더보기 링크
				projectLinks2.forEach(function(link) {
					link.addEventListener("mouseover", function() {
					mouseCursor.classList.add("pj_active");
					});
					link.addEventListener("mouseleave", function() {
					mouseCursor.classList.remove("pj_active");
					});
				});

			}  
			
			
		} 
		else {
			document.querySelector(".cursor").style.display = "none";
		}

	}).resize();
	


	// tweenMax s
	var controller = new ScrollMagic.Controller();
	var tweenTxt = TweenMax.to('.tweenTxt1', 5, {
		x: "-60%"
	});
	var tweenTxt2 = TweenMax.to('.left_tit', 1, {
		y: -300,
		letterspacing: "1px",
		
		// repeat: -1
	});
	var scene1 = new ScrollMagic.Scene({
		triggerElement: ".trigger",
		duration: "100%"
	})
	.setTween(tweenTxt)
	.addTo(controller)
	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".trigger2",
		duration: "100%",
	})
	.setClassToggle('.info1', 'active')
	.setTween(tweenTxt2)
	.addTo(controller)

	// main
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {triggerHook: "onEnter"}
	  });
	  new ScrollMagic
		.Scene({triggerElement: "#contactus", duration: "200%"})
		.setTween("#contactus > .bg", {y: "20%", ease: Linear.easeNone})
		.addTo(controller);
	  
	 
	// tweenMax e


	// IE로 접속 시 edge로 전환
	if(navigator.userAgent.indexOf("Trident") > 0){

	
		document.querySelector("body").style.overflow = "hidden";
		let targetTag = document.querySelector("body");
		let addTag = document.createElement("div");
		addTag.setAttribute('class', 'popup_layer');
	
		addTag.innerHTML = "<div class='pop_bg'></div><div class='pop_cont'><i class='ico'></i><p class='pop_txt'>해당 사이트는 Microsoft Edge, Chrome 브라우저에 최적화 되어있습니다. <br>원활한 사용을 위해 잠시 후 Edge 브라우저로 이동됩니다.</p></div>";
		
		targetTag.appendChild(addTag);

		setTimeout(function() {
			window.location.href = 'microsoft-edge:https://uenji.github.io/portfolio2021/';
		}, 4000);

	}
	else if(/MSIE \d |Trident.*rv:/.test(navigator.userAgent)){
	
		document.querySelector("body").style.overflow = "hidden";
		let targetTag = document.querySelector("body");
		let addTag = document.createElement("div");
		addTag.setAttribute('class', 'popup_layer');

		addTag.innerHTML = "<div class='pop_bg'></div><div class='pop_cont'><i class='ico'></i><p class='pop_txt'>해당 사이트는 Microsoft Edge, Chrome 브라우저에 최적화 되어있습니다. <br>원활한 사용을 위해 잠시 후 Edge 브라우저로 이동됩니다.</p></div>";
		
		targetTag.appendChild(addTag);

		setTimeout(function() {
			window.location.href = 'microsoft-edge:https://uenji.github.io/portfolio2021/';
		}, 4000);

	}

	 
// end


});



