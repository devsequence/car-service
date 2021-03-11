$('.slider-main').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.slider-nav',
    vertical: false,
    autoplay: false,
    verticalSwiping: true,
});

$('.slider-nav').slick({
    slidesToShow: 3,
    asNavFor: '.slider-main',
    vertical: true,
    focusOnSelect: true,
    autoplay: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><svg class=\"icon\">\<use xlink:href=\"#ico-left\"></use></svg></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><svg class=\"icon\">\<use xlink:href=\"#ico-right\"></use></svg></button>",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                vertical: false,
                slidesToShow: 2,
            }
        }
    ]
});

$(window).on('resize orientationchange', function() {
    if ($(window).width() > 1200) {
        $('.slider-nav').slick('unslick');
        $('.slider-nav').slick({
            slidesToShow: 3,
            asNavFor: '.slider-main',
            vertical: true,
            focusOnSelect: true,
            autoplay: false,
            centerMode: true
        });
    }
});
$('.viewed-slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.product-favorites__btn').on('click', function (e) {
    let $this = $(this);
    $this.toggleClass('active');
    $this.next().toggleClass('active');
    $this.find('span, .icon').toggleClass('hidden');
});