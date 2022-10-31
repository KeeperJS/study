/*
메인 페이지

변수명 설명
$bnbnint = 인터벌 변수 0.05초마다 함수 실행
$bnbnscale = 캐릭터+배경의 스케일 값을 저장한 변수
*/

$(function () {
  // 캐릭터 후버시 효과
  $('.bnbn').hover(function () {
    // 셋인터벌 변수
    $bnbnint = setInterval(function () {
      // 스케일 값이 4보다 낮을경우 $bnbnscale 변수에 0.05씩 추가
      if ($bnbnscale <= 4) {
        $bnbnscale += 0.05;
        // 추가한 변수 값을 css에 적용
        $('.bnbn').find('img').css({ 'transform': 'scale(' + $bnbnscale + ')' });
        $('.bg').find('img').css({ 'transform': 'scale(' + $bnbnscale + ')' });
        // 후버 가이드 이미지를 숨김
        $('.section .hover-guide').hide();
      } else {
        // 4보다 크거나 같은경우
        // 캐릭터 땀 흘리는 이미지 div 박스를 보임
        $('.bnbn-sweat').show();
        // 땀이 보이고 3초 뒤 mainpageshow() 함수 실행 땀 이미지 숨김
        setTimeout(function () {
          mainpageshow();
          $('.bnbn-sweat').hide();
          $('.bnbn-sweat div').hide();
        }, 3000);
      }
    }, 50);
  }, function () {
    // 마우스 후버가 떠날시 인터벌을 끄고 $bnbnscale 변수 값이 4보다
    // 낮은 경우 후버 가이드를 다시 띄우고 4보다 크거나 같을경우 숨김
    clearInterval($bnbnint);
    if ($bnbnscale <= 4) {
      $('.section .hover-guide').show();
    } else {
      $('.section .hover-guide').hide();
    }
  });
});
var $bnbnint
var $bnbnscale = 1;

// $bnbnscale 변수가 4보다 크거나 같을 경우 실행되는 함수
function mainpageshow() {
  // 캐릭터의 이미지를 바꾸고 애니메이션을 실행함
  $('.bnbn img').attr('src', './images/bnbn-over.png').css('transform', 'scaleX(-1) scale(4)');
  $('.bnbn').css('animation', 'bnbnmove 1 forwards 2.5s');
  // 3초 뒤
  setTimeout(function () {
    // 캐릭터 하이드 후 배경에 트렌지션을 주고 스케일을 1로 바꾸고
    // 텍스트 박스를 페이드인함
    $('.bnbn').hide();
    $('.bg img').css('transition', '1.5s all').css('transform', 'scale(1)');
    $('.main-contents-text').fadeIn(1000);
  }, 3000);
};