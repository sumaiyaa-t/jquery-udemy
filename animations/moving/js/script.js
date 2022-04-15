$(function () {

  //Move elements by customizing CSS styles with 1s duration
  $(".blue-box").animate({
    "margin-left": "+=200px"
  }, 1000, "linear");
  
  $(".blue-box").animate({
    "margin-left": "-=200px"
  }, 1000, "linear");
});
