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

    var camera = $(cameraNumber);
    $(camera).hover(function () {
        btnSlaiderLeft.fadeIn();
    }, function () {
        btnSlaiderLeft.fadeOut();
    });
    $(camera).hover(function () {
        btnSlaiderRight.fadeIn();
    }, function () {
        btnSlaiderRight.fadeOut();
    });
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


//Опис
var descriptionFun = function(itemNumber) {
    var fullDescription = $(itemNumber + " .full-description");
    var item = $(itemNumber);
    var description = $(itemNumber + " .description");
    $(item).hover(function () {
        description.on("click", function () {
            fullDescription.fadeIn();
        });

    }, function () {
       fullDescription.fadeOut();
    })
};
descriptionFun('.camera1'); descriptionFun('.camera2'); descriptionFun('.camera3'); descriptionFun('.camera4'); descriptionFun('.camera5'); descriptionFun('.camera6');
descriptionFun('.lens1'); descriptionFun('.lens2'); descriptionFun('.lens3'); descriptionFun('.lens4'); descriptionFun('.lens5');
descriptionFun('.tripod1'); descriptionFun('.tripod2');
descriptionFun('.outbreak1'); descriptionFun('.outbreak2'); descriptionFun('.outbreak3'); descriptionFun('.outbreak4');
descriptionFun('.accessory1'); descriptionFun('.accessory2'); descriptionFun('.accessory3');

// кружочки на картинці)
var d = document, $d = $(d),
    w = window, $w = $(w),
    wWidth = $w.width(), wHeight = $w.height(),
    credit = $('.credit > a'),
    particles = $('.particles'),
    particleCount = 0,
    sizes = [
        15, 20, 25, 35, 45
    ],
    colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
        '#FF5722', '#795548', '#9E9E9E', '#607D8B', '#777777'
    ],

    mouseX = $w.width() / 2, mouseY = $w.height() / 2;

function updateParticleCount () {
    $('.particle-count > .number').text(particleCount);
};

$w
    .on( 'resize' , function () {
        wWidth = $w.width();
        wHeight = $w.height();
    });

$d
    .on( 'mousemove touchmove' , function ( event ) {
        event.preventDefault();
        event.stopPropagation();
        mouseX = event.clientX;
        mouseY = event.clientY;
        if( !!event.originalEvent.touches ) {
            mouseX = event.originalEvent.touches[0].clientX;
            mouseY = event.originalEvent.touches[0].clientY;
        }
    })
    .on( 'mousedown touchstart' , function( event ) {
        if( event.target === credit.get(0) ){
            return;
        }
        mouseX = event.clientX;
        mouseY = event.clientY;
        if( !!event.originalEvent.touches ) {
            mouseX = event.originalEvent.touches[0].clientX;
            mouseY = event.originalEvent.touches[0].clientY;
        }
        var timer = setInterval(function () {
            $d
                .one('mouseup mouseleave touchend touchcancel touchleave', function () {
                    clearInterval( timer );
                })
            createParticle( event );
        }, 1000 / 60)

    });


function createParticle ( event ) {
    var particle = $('<div class="particle"/>'),
        size = sizes[Math.floor(Math.random() * sizes.length)],
        color = colors[Math.floor(Math.random() * colors.length)],
        negative = size/2,
        speedHorz = Math.random() * 10,
        speedUp = Math.random() * 25,
        spinVal = 360 * Math.random(),
        spinSpeed = ((36 * Math.random())) * (Math.random() <=.5 ? -1 : 1),
        otime,
        time = otime = (1 + (.5 * Math.random())) * 1000,
        top = (mouseY - negative),
        left = (mouseX - negative),
        direction = Math.random() <=.5 ? -1 : 1 ,
        life = 10;

    particle
        .css({
            height: size + 'px',
            width: size + 'px',
            top: top + 'px',
            left: left + 'px',
            background: color,
            transform: 'rotate(' + spinVal + 'deg)',
            webkitTransform: 'rotate(' + spinVal + 'deg)'
        })
        .appendTo( particles );


    var particleTimer = setInterval(function () {
        time = time - life;
        left = left - (speedHorz * direction);
        top = top - speedUp;
        speedUp = Math.min(size, speedUp - 1);
        spinVal = spinVal + spinSpeed;


        particle
            .css({
                height: size + 'px',
                width: size + 'px',
                top: top + 'px',
                left: left + 'px',
                opacity: ((time / otime)/2) + .25,
                transform: 'rotate(' + spinVal + 'deg)',
                webkitTransform: 'rotate(' + spinVal + 'deg)'
            });

        if( time <= 0 || left <= -size || left >= wWidth + size || top >= wHeight + size ) {
            particle.remove();

            clearInterval(particleTimer);
        }
    }, 1000 / 50);
}