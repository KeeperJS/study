$(function (){
// 2차메뉴 클래스
  var $navmenu = $('.navmenu')
  var basket = false;

  // 1차메뉴 후버효과
  $('#nav > li > a').hover( function () {
    var $hover = $(this).attr('class')
    if ( $hover == 'aRed')
    {} else { 
      $(this).css("color", "#d59855")
    }
  }, function () {
    var $hover = $(this).attr('class')
    if ( $hover == 'aRed')
    {} else { 
      $(this).css("color", "#000")
    }
  });
  // p태그 따로 후버 처리
  $('.menuopen').hover( function () {
      $(this).css("color", "#d59855")
    },function () {
      $(this).css("color", "#000")
    });
  // 2차메뉴 안에 dl dd 후버시 a 태그 언더라인
  $('.navmenu dl dd a').hover( function () {
    $(this).css('text-decoration', 'underline')
  }, function () {
    $(this).css('text-decoration', 'none')
  });
  // 2차메뉴 클릭토글 효과
  $('.menuopen').click(function () {
    var $mc = $(this).attr('class')
    console.log($mc)
    $('.con').toggleClass('on1')
    if ( $mc == 'menuopen mav1') {
      $('.contents').toggleClass('on1')
      $('.contents').removeClass('on2')
      $('.contents').removeClass('on3')
      $('.con').toggleClass('onf')
      $('.con').removeClass('ons')
      $('.con').removeClass('ont')
      $('.nav2').stop().fadeOut(1000)
      $('.nav3').stop().fadeOut(1000)
      $('.nav1').stop().fadeToggle(1000)
    } else if ( $mc == 'menuopen mav2' ) {
      $('.contents').toggleClass('on2')
      $('.contents').removeClass('on3')
      $('.contents').removeClass('on1')
      $('.con').toggleClass('ons')
      $('.con').removeClass('onf')
      $('.con').removeClass('ont')
      $('.nav2').stop().fadeToggle(1000)
      $('.nav1').stop().fadeOut(1000)
      $('.nav3').stop().fadeOut(1000)
    } else {
      $('.contents').toggleClass('on3')
      $('.contents').removeClass('on1')
      $('.contents').removeClass('on2')
      $('.con').toggleClass('ont')
      $('.con').removeClass('onf')
      $('.con').removeClass('ons')
      $('.nav3').stop().fadeToggle(1000)
      $('.nav1').stop().fadeOut(1000)
      $('.nav2').stop().fadeOut(1000)
    }
  });
  // 장바구니 메뉴 클릭시
  $('.basket-txt').click(function () {
    if ( basket ) {
    $('#shopping').stop().slideUp(1000)
    basket = false;
    $('.basket-txt > i:last-child').removeClass('fa-chevron-up')
    $('.basket-txt > i:last-child').addClass('fa-chevron-down')
    } else {
    $('#shopping').stop().slideDown(1000)
    $('.basket-txt > i:last-child').removeClass('fa-chevron-down')
    $('.basket-txt > i:last-child').addClass('fa-chevron-up')
    basket = true;
    }

  });
  // 장바구니 div에서 마우스가 떠날때
  $('#shopping').mouseleave(function(){
    $('#shopping').stop().slideUp(1000)
    basket = false;
    $('.basket-txt > i:last-child').removeClass('fa-chevron-up')
    $('.basket-txt > i:last-child').addClass('fa-chevron-down')
  });


  var $win      = $(window);
  var $header   = $('header');
  var hh        = $header.height();
  var $gnb      = $('.nava');
  var asc       = 100;

  $win.scroll( function () {

    if ( $win.scrollTop() > hh + asc ) {
      // hh + asc가 윈도우 스크롤보다 낮을때
      $gnb.css( {
        position: 'fixed',
        top: 0,
        zIndex: 1000,
      });
      $('.con').css({
        position: 'fixed',
        top: 0,
      });
      $('.logo_right').css({
        position: 'fixed',
        top: 0, right: 0,
        background: '#000',
        height: '40px',
        'line-height': '40px',
        zIndex: 2000,
      });
      $('.shoppingbag').css({
        'line-height': '20px',
      });
    } else {
      $gnb.css( {
        position: '',
        left: 0,
      });
      $('.con').css({
        position: 'absolute',
        top: '170px',
      });
      $('.logo_right').css({
        position: 'absolute',
        top: '20px', right: 0,
        background: 'trasparnet',
        height: '0',
        'line-height': '20px',
        zIndex: 2000,
      });
    }
  });
  $('.banner').flickity({
    cellAlign: 'right',
    contain: true,
    draggable: false,
    freeScroll: true,
    fullscreen: true,
    lazyLoad: 1,
    autoPlay: true,
    wrapAround: true,
  });

});