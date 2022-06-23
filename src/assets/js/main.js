// Slick slider

$('.main-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    infinite:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>'
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3
        }
      }
    ]  
  });

// Select
$(document).ready(function() {
  $('#sort-select,#select-list select').select2({
    minimumResultsForSearch: Infinity
  });
});


 // Menu button
 (function() {
  "use strict";
  var toggles = document.querySelectorAll(".c-hamburger");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
})();

///Drop menu
$(function(){
  $('.colapse-menu-button, .mobile-menu i').on('click',function(e){
    e.preventDefault();
    $('.mobile-menu').animate({
      width:'toggle'
    },300);
    $('.dark-bg').animate({
      opacity:'toggle'
    });
    $('body').toggleClass('scroll-disable');
  });
});

$(function(){
  $('.magic-info-btn, .mobile-information i').on('click',function(e){
    e.preventDefault();
    $('.mobile-information').animate({
      width:'toggle'
    },300);
    $('.dark-bg').animate({
      opacity:'toggle'
    });
    $('body').toggleClass('scroll-disable');
  });
});

$(function(){
  $('.sort-menu, .mobile-catalog-sidebar i').on('click',function(e){
    e.preventDefault();
    $('.mobile-catalog-sidebar').animate({
      width:'toggle'
    },300);
    $('.dark-bg').animate({
      opacity:'toggle'
    });
    $('body').toggleClass('scroll-disable');
  });
});

// Hidden menu

var blockMenu = $('header .order_block-2'); 
var infoBlock = $('.information-hidden-block');
var catalogSidebar = $('.wrap-catalog-sidebar');
$(window).resize(function(){
    var wid = $(window).width();
    if(wid > 570 && blockMenu.is(':hidden') || infoBlock.is(':hidden') ||  catalogSidebar.is(':hidden')) {
        blockMenu.removeAttr('style');
        infoBlock.removeAttr('style');
        catalogSidebar.removeAttr('style');        
    } 
});



$('.search-field').hide();
$('.menu__search').on('click',function(e) {
    e.preventDefault();
   $('.search-field').animate({
     height:'toggle'
   },300);
   $(this).toggleClass('active'); 
});


  $('.recommendations-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      infinite:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
      prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }  
      ]        
  });

function mobileOnlySlider() {
  $('.magic-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      infinite:true,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
      prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          },
          breakpoint: 292,
          settings: "unslick"
        }
      ]        
  });
  }

  if(window.innerWidth < 992) {
        mobileOnlySlider();   
  }
  
  $(window).resize(function(e){
      if(window.innerWidth < 992) {
        
          if(!$('.magic-slider').hasClass('slick-initialized')){
              mobileOnlySlider();
          }
          
      }else{
          if($('.magic-slider').hasClass('slick-initialized')){
              $('.magic-slider').slick('unslick');
          }
          
      }
  });

// Fixed menu
$(document).ready(function(){
	$(window).scroll(function(){  
		"use strict"; 
		var scroll = $(window).scrollTop();
		if( scroll > 20){ 
      $(".magic-menu-logo").css('display','block');
      $("header").addClass("magicMenuFixed");
		} 
		else{
       $("header").removeClass("magicMenuFixed");
		  $(".magic-menu-logo").css('display','none');
		}
  });  
});

$('#select-list select').on('change',function(){
  var valThis = $(this).val();
  var tabulator = '.list-to-select a[href="#' + valThis +'"]';
  $(tabulator).tab('show');
});


$('.mobile-catalog-sidebar .catalog__title,.wrap-catalog-sidebar .catalog__title').on('click',function(){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
});

$('.mobile-catalog-sidebar .catalog__price .catalog__title').addClass('active');
$('.mobile-catalog-sidebar .catalog__price .catalog__title').next().show();

// Show shoping card
var clickLink = $('a[href="#shoping-card"]');
$(clickLink).on('click',function(){
  $('.shoping-card').toggleClass('active');
})