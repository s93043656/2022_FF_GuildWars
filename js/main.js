
$(".page01_link_btn").hover(
    function() {
        $(this).addClass( "btn_hover" );
    }, function() {
        $(this).removeClass( "btn_hover" );
    }
);

$(function(){

	var _showTab = 0;
    $('.page02').each(function(){

		var $tab = $(this);

		var $defaultLi = $('.page_tab_btnbox ul li', $tab).eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();


		$('.page_tab_btnbox ul li', $tab).click(function() {
			
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');

			$this.addClass('active').siblings('.active').removeClass('active');

			$(_clickTab).stop(false, true).fadeIn().siblings().hide();

            $('.Road-sign-btn ul li').eq($(this).index()).addClass('active').siblings('.active').removeClass('active');

			return false;
		})
    });
    $('.page03').each(function(){

		var $tab = $(this);

		var $defaultLi = $('.page_tab_btnbox ul li', $tab).eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();


		$('.page_tab_btnbox ul li', $tab).click(function() {
			
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');

			$this.addClass('active').siblings('.active').removeClass('active');

			$(_clickTab).stop(false, true).fadeIn().siblings().hide();

            $('.Road-sign-btn ul li').eq($(this).index()).addClass('active').siblings('.active').removeClass('active');

			return false;
		})
    });
	$('.page04').each(function(){

		var $tab = $(this);

		var $defaultLi = $('.page_tab_btnbox ul li', $tab).eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();


		$('.page_tab_btnbox ul li', $tab).click(function() {
			
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');

			$this.addClass('active').siblings('.active').removeClass('active');

			$(_clickTab).stop(false, true).fadeIn().siblings().hide();

            $('.Road-sign-btn ul li').eq($(this).index()).addClass('active').siblings('.active').removeClass('active');

			return false;
		})
    });
    $('.page05').each(function(){

		var $tab = $(this);

		var $defaultLi = $('.page_tab_btnbox ul li', $tab).eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();


		$('.page_tab_btnbox ul li', $tab).click(function() {
			
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');

			$this.addClass('active').siblings('.active').removeClass('active');

			$(_clickTab).stop(false, true).fadeIn().siblings().hide();

            $('.Road-sign-btn ul li').eq($(this).index()).addClass('active').siblings('.active').removeClass('active');

			return false;
		})
    });
});

$(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.secblock');
    
    elems.each(function(index){
        var elemTop   = $(this).offset().top;
        var elemBottom  = elemTop + $(this).height();
        var id    = $(this).attr('id');
        var navElem = $('.move-menu li[id="#' + id+ '"]');
        navElem.removeClass( 'active' )
        if(currentTop >= elemTop && currentTop <= elemBottom){
        
        navElem.addClass('active');
        }
    })
});

var currentTop = $(window).scrollTop();
var elems = $('.secblock');
elems.each(function(index){
    var elemTop   = $(this).offset().top;
    var elemBottom  = elemTop + $(this).height();
    var id    = $(this).attr('id');
    var navElem = $('.move-menu li[id="#' + id+ '"]');
    navElem.removeClass( 'active' )
    if(currentTop >= elemTop && currentTop <= elemBottom){

        navElem.addClass('active');
        
    }
})


$(document).ready(function(){
    $('.menubtn02').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec02-block').offset().top}, 500);
    });

    $('.menubtn03').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec03-block').offset().top}, 500);
    });

    $('.menubtn04').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec04-block').offset().top}, 500);
    });

    $('.menubtn05').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec05-block').offset().top}, 500);
    });

    $('.move-topbtn , .RWD_move-topbtn').click(function(){ 
        $('html,body').animate({scrollTop:$('.wrap').offset().top}, 500);
    });
});

$("#hamburger_menu").click(function(){
    $(".nav-mobile").addClass("nav-mobile-slide");
    $(".overlay-block").css("z-index","999; opacity: 1;");
    $(".overlay-block").show();
});

$(".navbar-close-btn , .RWD_move_menu li , .RWD_move-topbtn").click(function(){
    $(".nav-mobile").removeClass("nav-mobile-slide");
    $(".overlay-block").css("z-index","1; opacity: 0;");
    $(".overlay-block").hide();
});

$(".Popupbtn").click(function() {
    $("div[id=" + $(this).attr("data-activity") +"]").fadeIn(200);
    });
$(".popup_close").click(function() {
    $(".mask").fadeOut(200);
});