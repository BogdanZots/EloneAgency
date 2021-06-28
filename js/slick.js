$(document).ready(function () {
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        /* autoplay: true, */ /* this is the new line */
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1026,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    $('.slick__class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        dots:false,
        responsive: [{
            breakpoint: 1026,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots:true,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
            }
        },
    ]

    })
});