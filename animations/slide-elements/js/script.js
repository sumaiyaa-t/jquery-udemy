$(function () {

  //Disappear elements by sliding up
  $(".blue-box").slideUp(2000);

  //Show elements by sliding down
  $(".blue-box").slideDown(2000);

  //Hide paragraph texts
  $("p").hide();

  //Show paragraph texts again by sliding down
  $("p").slideDown(2000);

  //Toggle slide up and down
  $(".green-box").slideToggle(2000);

});
