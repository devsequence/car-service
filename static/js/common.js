$(window).on('load', function () {
    const $this = $(this);
    const $thisWidth = $this.width();
    if($thisWidth > 767){}else{
        $('.price-item').on('click', function (e) {
            const $this = $(this);
            $this.toggleClass('active');
        });
    }
});
// header nav
$('.btn-header').on('click', function (e) {
    e.preventDefault();
    $('.header-mobile').addClass('is-open');
    $('body').addClass('is-scroll');
});
$('.btn-close').on('click', function (e) {
    e.preventDefault();
    $('.header-mobile').removeClass('is-open');
    $('body').removeClass('is-scroll');
});
$('.header-popup .popup-close').on('click', function (e) {
    e.preventDefault();
    $('.header-btn').removeClass('is-open');
    $('.header-popup').removeClass('is-open');
    $('body').removeClass('is-scroll');
});
// header nav
$('.header-bottom .sub-nav')
    .mouseenter(function() {
        var $this = $(this);
        $this.find('a').addClass('active');
        $this.find('ul').addClass('active');
        $('.header-overlay').addClass('active');
    })
    .mouseleave(function() {
        var $this = $(this);
        $this.find('a').removeClass('active');
        $this.find('ul').removeClass('active');
        $('.header-overlay').removeClass('active');
    });
$('.header-mobile .sub-nav__btn').on('click', function (e) {
    var $this = $(this);
    $this.next().slideToggle();
});

// function for popup
function popupOpen() {
    const $popupButton = $('.popup-btn');
    $popupButton.on('click', function (e) {
        e.preventDefault();
        const $this = $(this);
        const popupButtonData = $this.data('popup');
        const videoId = $this.find('.video-id').text();
        const popupText = $this.parent().prev().text();
        $('.popup').removeClass('active');
        $('body').addClass('is-scroll');
        $('div[data-popup = '+popupButtonData+']').addClass('active');

        $('.popup-item-price .popup-subtitle').text(popupText);
        $(".video-popup iframe").remove();
        $('<iframe frameborder="0" allowfullscreen></iframe>')
            .attr("src", "http://www.youtube.com/embed/" + videoId)
            .appendTo(".video-popup");
    });
}
popupOpen();

$('.popup-close').on('click', function (e) {
    const $this = $(this);
    $this.parent().parent().removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('is-scroll');
});
$('.popup-overlay').on('click', function (e) {
    const $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('is-scroll');
});
// function for popup


$('.show-more').on('click', function () {
    const $this = $(this);
    $this.parent().toggleClass('active');
});
$('.btn-reviews').on('click', function (e) {
    $('html, body').animate({
        scrollTop: $(".reviews-form").offset().top - 100
    }, 2000);
});
$('.product-descr').on('click', function (e) {
    $('html, body').animate({
        scrollTop: $(".about-product").offset().top - 100
    }, 2000);
});