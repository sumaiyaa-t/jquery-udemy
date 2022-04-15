$(function () {
  
  //Timing animation using callback function
  $(".red-box").slideUp(1000, function(){
    $(".green-box").fadeTo(1000,0.2, function(){
      $(".blue-box").fadeTo(1000,0.2, function(){
        alert("This is the callback: animation is finished")
      })
    })
  });
 
});
