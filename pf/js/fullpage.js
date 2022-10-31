$(function () {
  $('#layout').fullpage({
    navigation: true,
    autoplay: false
  });
});
// 메뉴
$(function() {
  $('.main-menu ul li a').on("click",function(){
    $('#menu').slideUp(1000);
  });
  $('.navbtn').click(function(){
    $('#menu').slideUp(1000);
  })
  $("body").on("mousewheel", function (event) { 
    if(event.originalEvent.wheelDelta >= 0){
      $('#menu').slideDown(1000);
    }else{
      $('#menu').slideUp(1000);
    }
  });
});