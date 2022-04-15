$(function () {
  //Animate elements by customizing CSS styles with 1s duration
  $(".blue-box").animate(
    {
      "margin-left": "+=200px",
      "opacity": "0",
      "height": "50px",
      "width": "50px",
      "margin-top": "25px",
    },
    1000
  );

  $("p").animate(
    {
      "font-size": "20px",
    },
    1000
  );
});
