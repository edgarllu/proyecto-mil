var navbarHeight = $('.navbar').height(); 

$(window).scroll(function() {
  //var navbarColor = "62,195,246";//color attr for rgba
  var smallLogoHeight = $('.small-logo').height();
  var bigLogoHeight = $('.big-logo').height();
  if($(window).scrollTop()>0){
    $('.jumbotron').css('background-attachment', 'fixed')
                   .css('background-position', '0px -0px')
                   .css('transition', '.15s all ease-out');
  }else{
     $('.jumbotron').css('background-attachment', 'scroll')
              .css('background-position', '0px -0px')
              .css('transition', '.15s all ease-in');;
  }
  
  
  var smallLogoEndPos = 0;
  var smallSpeed = (smallLogoHeight / bigLogoHeight);
  
  var ySmall = ($(window).scrollTop() * smallSpeed); 
  
  var smallPadding = navbarHeight - ySmall;
  if (smallPadding > navbarHeight) { smallPadding = navbarHeight; }
  if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
  if (smallPadding < 0) { smallPadding = 0; }
  
  $('.small-logo-container ').css({ "padding-top": smallPadding});
  
  var navOpacity = ySmall / smallLogoHeight; 
  if  (navOpacity > 1) { navOpacity = 1; }
  if (navOpacity < 0 ) { navOpacity = 0; }
  var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
  $('.navbar').css({"background-color": navBackColor});
  
  var shadowOpacity = navOpacity * 0.4;
  if ( ySmall > 1) {
    $('.navbar').css({"box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")"});
  } else {
    $('.navbar').css({"box-shadow": "none"});
  }
  
  /* 

$(window).scroll(function(){
  if($(window).scrollTop()>110){
     $('.jumbotron').css('background-attachment', 'fixed')
              .css('background-position', '0px -110px');
  }else{
     $('body').css('background-attachment', 'scroll')
              .css('background-position', '0px 0px');
  }
});
  */

  
});