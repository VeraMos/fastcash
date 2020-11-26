$(document).ready(function () {

   	$('.advantages__list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    //dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                }
            }
        ]
    });

    $('.steps__list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    //dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                }
            }
        ]
    });

$("#range").slider({
range: "min",
max: 80000,
min: 1000,
value: 30,
slide: function(e, ui) {
$("#currentVal").html(ui.value);
}
});
});

$(document).ready(function () {

$("#range-new").slider({
range: "min",
max: 30,
min: 5,
value: 1,
slide: function(e, ui) {
$("#currentVal-new").html(ui.value);
}
});
});

$(document).ready(function () {

$("#range-ver").slider({
range: "min",
max: 100,
min: 1,
value: 1,
slide: function(e, ui) {
$("#currentVal-ver").html(ui.value);
}
});
});

$(document).ready(function () {
    $(".mask_phone").mask('+7 999-999-99-99');
});