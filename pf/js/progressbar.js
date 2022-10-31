// pset 함수 프로그래스바 설정 함수
function pset() {$(function(){
  /*
  value
  벨류 값은 순서대로
  html5,css3,jquery
  speed
  스피드는 퍼센트 숫자 올라가는 속도
  */
  let value = [70, 60, 60, 60, 40];
  let speed = 25;
  let valuetext = value;
  let valuedeg = new Array();

  // deg 계산 공식
  // (벨류(%)값 * 2.6(최대 260도)) -130deg
  // 0deg일경우 50%센트와 같은 각임
  valuedeg[0] = (value[0] * 2.6) - 130;
  valuedeg[1] = (value[1] * 2.6) - 130;
  valuedeg[2] = (value[2] * 2.6) - 130;
  valuedeg[3] = (value[3] * 2.6) - 130;
  valuedeg[4] = (value[4] * 2.6) - 130;

  // 계기판 핸드 이미지 각도 적용
  $('.progress.html5').find('img').eq(1).css('transform','rotate('+ valuedeg[0] +'deg) scaleX(-1)');
  $('.progress.css3').find('img').eq(1).css('transform','rotate('+ valuedeg[1] +'deg) scaleX(-1)');
  $('.progress.jquery').find('img').eq(1).css('transform','rotate('+ valuedeg[2] +'deg) scaleX(-1)');
  $('.progress.photoshop').find('img').eq(1).css('transform','rotate('+ valuedeg[3] +'deg) scaleX(-1)');
  $('.progress.php').find('img').eq(1).css('transform','rotate('+ valuedeg[4] +'deg) scaleX(-1)');

  // i 변수는 0부터 시작해서 벨류(value)값까지 올라감
  let i = [0,0,0,0,0];

  // 벨류값을 실제 p태그에 적용시키는 인터벌

  // html5
  let valuetxthtml5 = setInterval(function(){
    if(i[0] >= valuetext[0]){
      clearInterval(valuetxthtml5);
    }else {
      i[0] += 1;
      $('.progress.html5').find('p').text(i[0]);
    }
  },speed);

  // CSS3
  let valuetxtcss3 = setInterval(function(){
    if(i[1] >= valuetext[1]){
      clearInterval(valuetxtcss3);
    }else {
      i[1] += 1;
      $('.progress.css3').find('p').text(i[1]);
    }
  },speed);

  // jQuery
  let valuetxtjquery = setInterval(function(){
    if(i[2] >= valuetext[2]){
      clearInterval(valuetxtjquery);
    }else {
      i[2] += 1;
      $('.progress.jquery').find('p').text(i[2]);
    }
  },speed);

  // photoshop
  let valuetxtphotoshop = setInterval(function(){
    if(i[3] >= valuetext[3]){
      clearInterval(valuetxtphotoshop);
    }else {
      i[3] += 1;
      $('.progress.photoshop').find('p').text(i[3]);
    }
  },speed);

  // php
  let valuetxtphp = setInterval(function(){
    if(i[4] >= valuetext[4]){
      clearInterval(valuetxtphp);
    }else {
      i[4] += 1;
      $('.progress.php').find('p').text(i[4]);
    }
  },speed);
});
}
// 프로그래스바 초기화 시키는 함수
function preset() {
  $('.progress.html5').find('p').text(0);
  $('.progress.css3').find('p').text(0);
  $('.progress.jquery').find('p').text(0);
  $('.progress.photoshop').find('p').text(0);
  $('.progress.php').find('p').text(0);
  $('.progress.html5').find('img').eq(1).css('transform','rotate(-130deg) scaleX(-1)');
  $('.progress.css3').find('img').eq(1).css('transform','rotate(-130deg) scaleX(-1)');
  $('.progress.jquery').find('img').eq(1).css('transform','rotate(-130deg) scaleX(-1)');
  $('.progress.photoshop').find('img').eq(1).css('transform','rotate(-130deg) scaleX(-1)');
  $('.progress.php').find('img').eq(1).css('transform','rotate(-130deg) scaleX(-1)');
}
// 마우스 휠을 내릴때 #section1(스킬 페이지)에 active라는 클래스가 있을경우
// pset() 함수를 실행 아닐경우 초기화
$(function() {
  $(window).on('wheel',function(){
    if($("#section1").hasClass("active") === true) {
      pset();
    }else{
      let check = $('.progress.html5').find('p').text();
      if(check != 0){
        preset();
      }
    }
  });
});