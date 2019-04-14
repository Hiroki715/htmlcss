$(function(){
  $('.qa1').click(function(){
    var $answerbox = $(this).find('.answerbox');
    if($answerbox.hasClass('open')){
      $answerbox.removeClass('open');
      $answerbox.slideUp(300);

      $(this).find('.close').text('+');
      $(this).find('.qaclose').text('+');
    }else{
      $answerbox.addClass('open');
      $answerbox.slideDown(300);

      $(this).find('.close').text('-');
      $(this).find('.qaclose').text('-');
    }
  });
  $('.applyflowbox').click(function(){
    var $flowright = $(this).find('.flowright');
    if($flowright.hasClass('open')){
      $flowright.removeClass('open');
      $flowright.slideUp(300);

      $(this).find('.closetb').text('+');
    }else{
      $flowright.addClass('open');
      $flowright.slideDown(300);

      $(this).find('.closetb').text('-')
    }
  });
});
