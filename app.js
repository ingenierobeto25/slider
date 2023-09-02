$(document).ready(function () {
  
  var image = $(".slides img");
  var imageArray = [];
  var imagePosition = 0;

 image.each(function () {
    imageArray.push($(this).attr("src"));
  }); 

  $(".prev").click(function () {
  
    imagePosition = imagePosition - 1;
    if (imagePosition < 0) {
      imagePosition = imageArray.length - 1;
    }
    image.attr("src", imageArray[imagePosition]);
  
  });

  $(".next").click(function () {
   
    imagePosition = imagePosition + 1;
    if (imagePosition > imageArray.length - 1) {
      imagePosition = 0;
    }
    image.attr("src", imageArray[imagePosition]);
  
  });

  
});
