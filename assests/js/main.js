$(document).ready(function(){

  // Bar Hover Function
  $(".bar-btn").mouseenter(function(){
    $(".bar-line").addClass("bar-line-width");
  });
  $(".bar-btn").mouseleave(function(){
    $(".bar-line").removeClass("bar-line-width");
  });

  $('.name').on("animationend", function(){
    $('.typewriter-animation').addClass("hide-typewriter-border");
    $('.skills-text').removeClass("hide");
    $('.skills-text').addClass("typewriter-animation");
  });

  $('.closebtn').click(function(){
    $('#myNav').css("width", "0%");
  });
  $('.bar-btn').click(function(){
    $('#myNav').css("width", "74%");
  });

});
