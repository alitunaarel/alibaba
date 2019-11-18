window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}


$(document).ready(function(){

    $("#btnup").click(function(){
        $('html, body').animate({scrollTop: 0 },80);
    });
    $('#menuLink1').click(function(){
        $('html, body').animate({scrollTop: $('#competence').offset().top},120);
    });


    
    
    $(window).scroll(function() {
     
      if($(this).scrollTop() > 20) { 
          $('nav').addClass('solid');
      } else {
          $('nav').removeClass('solid');
      }
    });
});