$(function() {
  $(window).on('scroll', function() {
    fromTop = $(window).scrollTop();
      $('.feature').css({
        'opacity': 1 - ((fromTop / 700))
      });
  });
});

$(window).load(function(){
    $('html,body').animate({ scrollTop: 0 }, '1');
});