//кнопка вгору
var btnTop = $(".top");
 $(window).on("scroll", function () {
     if ($(window).scrollTop() > 20) {
        btnTop.fadeIn();
     } else {
         btnTop.fadeOut();
     }
 });
 //меню
btnTop.on("click", function () {
   $("html,body").animate({scrollTop:0}, 1500)
});
$(".main-menu a").click( function(){
    var element = $(this).attr("href");
    var distance = $(element).offset().top;
    $("html,body").animate({scrollTop: distance}, 1500)
});
//слайдер

var slaider = function(cameraNumber){
    var btnSlaiderRight = $(cameraNumber + " .slaider-right");
    var btnSlaiderLeft = $(cameraNumber + " .slaider-left");
    btnSlaiderLeft.fadeOut();
    btnSlaiderRight.fadeOut();
    var camera = $(cameraNumber);
    $(camera).hover(function () {
        btnSlaiderLeft.fadeIn();
    }, function () {
        btnSlaiderLeft.fadeOut();
    })
    $(camera).hover(function () {
        btnSlaiderRight.fadeIn();
    }, function () {
        btnSlaiderRight.fadeOut();
    })
    var cameraImg = cameraNumber + ' .img';
    var cameraImgCurry = cameraNumber + ' .img.curry';
   $(cameraNumber + " .slaider-right").click(function(){
       var currentImage = $(cameraImgCurry);
       var currentImageIndex = $(cameraImgCurry).index();
       var nextImageIndex = currentImageIndex + 1;
       var nextImage = $(cameraImg).eq(nextImageIndex);
       currentImage.fadeOut(1000);
       currentImage.removeClass('curry');

       if(nextImageIndex == ($(cameraNumber + ' .img:last').index()+1)){
           $(cameraImg).eq(0).fadeIn(1000);
           $(cameraImg).eq(0).addClass('curry');

       } else {
           nextImage.fadeIn(1000);
           nextImage.addClass('curry');
       }
   });
    $(cameraNumber + ' .slaider-left').click(function()
    {
        var currentImage = $(cameraImgCurry);
        var currentImageIndex = $(cameraImgCurry).index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $(cameraImg).eq(prevImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('curry');
        prevImage.fadeIn(1000);
        prevImage.addClass('curry');
    });
};
slaider('.camera1');
slaider('.camera2');
slaider('.camera3');
slaider('.camera4');
slaider('.camera5');
slaider('.camera6');