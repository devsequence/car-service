$('.filter-open').on('click', function (e) {
    var $this = $(this);
    $this.find('span').toggleClass('hidden');
    $this.next().toggleClass('filter-hidden');
});
$(window).on('load', function () {
    let init_slider = function () {
        let inputRange = $('#sliderRange'),
            rangeFrom = $('#amount-from'),
            rangeTo = $('#amount-to');
        inputRange.slider({
            range: true,
            min: inputRange.data('min'),
            max: inputRange.data('max'),
            values: [rangeFrom.val(), rangeTo.val()],
            slide: function slide(event, ui) {
                rangeFrom.val(ui.values[0]).trigger('change');
                rangeTo.val(ui.values[1]).trigger('change');
            }
        });
        rangeFrom.change(function () {
            let value = $(this).val();
            inputRange.slider('values', 0, value);
        });
        rangeTo.change(function () {
            let value = $(this).val();
            inputRange.slider('values', 1, value);
        });
    };
    $(function () {
        init_slider();
    });
});

