
var image = $(".slides img");
var paragraph = $(".slides .buttonLieu");
var imageArray = [];
var index = 0;
var paragraphArray = [];
var paragraphIndex = 0;



image.each(function () {
    imageArray.push($(this).attr("src"));
}); 

paragraph.each(function () {
    paragraphArray.push($(this));
}); 


$(".prev").click(function () {

    index = index - 1;
    if(index < 0){
        index = imageArray.length - 1;
    };
    $("#imageSlider").attr("src", imageArray[index]);
    $("#textSlider")[0].innerHTML = paragraphArray[index][0].innerHTML ;

});

$(".next").click(function () {

index = index + 1;
if (index > imageArray.length - 1) {
    index = 0;
};
    //image.attr("src", imageArray[index]);
    $("#imageSlider").attr("src", imageArray[index]);
    $("#textSlider")[0].innerHTML = paragraphArray[index][0].innerHTML ;
});



