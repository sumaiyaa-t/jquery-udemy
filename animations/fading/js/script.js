$(function() {
  // jQuery goes here...

  /* Fade out the red box on page load
   $(".red-box").fadeOut(2000);
   $(".green-box").fadeOut(2000);*/
   
  /* Fade in the red box on page load
   $(".red-box").fadeIn(2000);*/
   
   //Fade until the opacity of red box reaches to 20%
   $(".red-box").fadeTo(1000, 0.2);

   //Fade until the opacity of green box reaches to 50%
   $(".green-box").fadeTo(1000, 0.5);

   //Fade until the opacity of blue box reaches to 80%
   $(".blue-box").fadeTo(1000, 0.8);

   //Fade in and fade out
   $(".blue-box").fadeToggle();
   $(".blue-box").fadeToggle();
});