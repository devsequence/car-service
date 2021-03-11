$(window).on('load', function () {
    const $this = $(this);
    const $thisWidth = $this.width();
    if($thisWidth > 767){}else{
        $(window).on('scroll', function() {
            const $this = $(this);
            const $thisHeader = $('.header');
            const $thisPage = $('.page-content');
            if ($this.scrollTop() > 1) {
                $thisHeader.addClass('header-scroll');
                $thisPage.addClass('page-scroll');
            }else {
                $thisHeader.removeClass('header-scroll');
                $thisPage.removeClass('page-scroll');
            }
        });
        // accordion price item
        $('.price-item').on('click', function (e) {
            const $this = $(this);
            $this.toggleClass('active');
        });
    }
});
// header nav
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('is-open');
    $('.header-popup').toggleClass('is-open');
    $('body').toggleClass('is-scroll');
});
$('.header-popup .popup-close').on('click', function (e) {
    e.preventDefault();
    $('.header-btn').removeClass('is-open');
    $('.header-popup').removeClass('is-open');
    $('body').removeClass('is-scroll');
});
// header nav


// function for popup
function popupOpen() {
    const $popupButton = $('.popup-btn');
    $popupButton.on('click', function (e) {
        const $this = $(this);
        const popupButtonData = $this.data('popup');
        $('.popup').removeClass('active');
        $('body').addClass('is-scroll');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
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

// accordion item
$('.accordion-item').on('click', function (e) {
    const $this = $(this);
    $this.toggleClass('active');
});
// accordion item
// guarantee item show more
$('.guarantee-info__text').each(function (e) {
    const $this = $(this);
    const textLength = $this.text().length;
    if(textLength > 350){
        $this.addClass('show-more');
        $this.next().removeClass('hidden')
    }
});

$('.read-more').on('click', function () {
    const $this = $(this);
    $this.find('span').toggleClass('hidden');
    $this.prev().toggleClass('show-more')
});
// guarantee item show more

// slick slider about page

$('.btn-reviews').on('click', function (e) {
    $('html, body').animate({
        scrollTop: $(".reviews-form").offset().top - 100
    }, 2000);
});