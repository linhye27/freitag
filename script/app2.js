$(function(){
    //mousemove : 미우스가 화면에서 움직일때 발생하는 이벤터
    // 마우스위치 지정 필요값
    // -event.pageX 브라우저화면을 기준으로 마우스의 x좌표위치
    // -event.pageY 브라우저 화면을 기준으로 마우스의 y자표위치
    // window : 웹페이지 실행시켰을때 나오는 처음 화면 객체화 
  
    $(window).mousemove(function(){
        $(".pointer").css({
            left:event.pageX+2,
            top:event.pageY+2,
        });
    });
  // nav
  $(".top h3").click(function(){
    $("nav").show();
   });
   
   $(".icon>i").click(function(){
    $("nav").hide();
   });

   $('.up').bind('click', function() {
    $('html, body').animate({scrollTop: '0'}, 1500);
  });
   
//카드 뒤집기
$('.cimg').on('click', function () {
  $(this).toggleClass('act');
  if($('.cimg').hasClass('act')){
    $('.cimg').addClass('act');
    
  }else{
    $('.cimg').removeClass('act');
  }
});


$('.cimg2').on('click', function () {
  $(this).toggleClass('act');
  if($('.cimg2').hasClass('act')){
    $('.cimg2').addClass('act');
    
  }else{
    $('.cimg2').removeClass('act');
  }
});

$('.cimg3').on('click', function () {
  $(this).toggleClass('act');
  if($('.cimg3').hasClass('act')){
    $('.cimg3').addClass('act');
    
  }else{
    $('.cimg3').removeClass('act');
  }
});

$('.cimg4').on('click', function () {
  $(this).toggleClass('act');
  if($('.cimg4').hasClass('act')){
    $('.cimg4').addClass('act');
    
  }else{
    $('.cimg4').removeClass('act');
  }
});

$('.cimg5').on('click', function () {
  $(this).toggleClass('act');
  if($('.cimg5').hasClass('act')){
    $('.cimg5').addClass('act');
    
  }else{
    $('.cimg5').removeClass('act');
  }
});

// main 
$('#slick01').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
    

}); 
