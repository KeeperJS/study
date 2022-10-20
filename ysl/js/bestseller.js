$(function () {
  if($(this).innerWidth() <= 700) {
    $('.grid-gal').flickity({
      draggable: true,
      freeScroll: true,
      fullscreen: false,
      lazyLoad: 1,
      autoPlay: false,
      wrapAround: true,
      groupCells: 1,
    });
  } else {
    $('.grid-gal').flickity({
      draggable: false,
      freeScroll: true,
      groupCells: 5,
    })};
  $itemtop = $('.item.top').attr('class')
  function init () {
  $itemtop = $('.item.top').attr('class')
    if ($itemtop == 'item top is-selected') {
      $('.rank').eq(0).text('No.1')
      $('.rank').eq(1).text('No.2')
      $('.rank').eq(2).text('No.3')
      $('.rank').eq(3).text('No.4')
      $('.rank').eq(4).text('No.5')
    } else {
      $('.rank').eq(0).text('No.6')
      $('.rank').eq(1).text('No.7')
      $('.rank').eq(2).text('No.8')
      $('.rank').eq(3).text('No.9')
      $('.rank').eq(4).text('No.10')
    }
  };
  init();
  $('.flickity-button').click(function (){
    init()
  });
  $(window).resize( function() {
    if($(this).innerWidth() <= 700) {
      $('.grid-gal').flickity({
        draggable: true,
        freeScroll: true,
        fullscreen: false,
        lazyLoad: 1,
        autoPlay: false,
        wrapAround: true,
        groupCells: 1,
      });
    } else {
      $('.grid-gal').flickity({
        draggable: false,
        freeScroll: true,
        groupCells: 5,
      });
    }
  });
});