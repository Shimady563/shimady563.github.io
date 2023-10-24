/*global document*/
/*global $*/

$(document).ready(function () {
    $(".gallery").slick({
        dots: true,
        infinite: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]
    });
});