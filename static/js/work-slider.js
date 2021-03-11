// slick slider about page

$('.work-slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    prevArrow:"<button type='button' class='slick-prev pull-left'><svg class=\"icon\">\<use xlink:href=\"#ico-left\"></use></svg></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><svg class=\"icon\">\<use xlink:href=\"#ico-right\"></use></svg></button>",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        }
    ]
});