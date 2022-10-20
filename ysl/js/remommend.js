$(function () {
  $('.toptxt > ul > li').click( function () {
    $('.toptxt > ul > li').removeClass('on')
    $('.inline-menu').removeClass('on')
    $(this).addClass('on')
  });
  $('.recomright .mo').hover( function () {
    $(this).addClass('add');
  },function () {
    $(this).removeClass('add');
  });
});