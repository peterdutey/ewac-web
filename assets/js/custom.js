$(document).ready(function () {
    var totalLength = $('.questionnaire_step').length;
    $(".progress_bar").append(new Array(++totalLength).join('<span></span>'));
    // on start click
    $('.screen1 .btn').on('click', function () {
        $('.screen1').hide();
        $('.questionnaire_steps').fadeIn();
        $('.questionnaire_steps .questionnaire_step').eq(0).addClass('active').fadeIn();
        $('.progress_bar span').eq(0).addClass('active');
    });

    // button activity
    $('.questionnaire_step .btn-toolbar button').on('click', function () {
        var value = $(this).attr('data-value');
        if (value == '0') {
            $('.questionnaire_results .results_ukunits').text('0');
            $('.questionnaire_results .results_grams').text('0');
            $('.questionnaire_results .results_auditc').text('0');
            $('.questionnaire_steps').hide();
            $('.questionnaire_results').fadeIn();
        } else {
        $(this).parent().parent().find('button').removeClass('active');
        $(this).addClass('active');
        $('.btn-group-prev').fadeIn();
        var nextItem = $('.questionnaire_step.active').removeClass('active').next();
        var nextSpan = $('.progress_bar span.active').removeClass('active').next();
        if (!nextItem.length) {
            $('.questionnaire_step').last().addClass('last');
            var F = parseFloat($('.questionnaire_step1 button.active').attr('data-value'));
            var Q = parseFloat($('.questionnaire_step2 button.active').attr('data-value'));
            var V = parseFloat($('.questionnaire_step3 button.active').attr('data-value'));
            var audit1 = parseFloat($('.questionnaire_step1 button.active').attr('data-score'));
            var audit2 = parseFloat($('.questionnaire_step2 button.active').attr('data-score'));
            var audit3 = parseFloat($('.questionnaire_step3 button.active').attr('data-score'));
            var resultUnit = parseFloat((F * Q) + (V * 5.70345) ).toFixed(2);
            var resultGram = parseFloat(((F * Q) + (V * 5.70345)) * 8).toFixed(2);
           var ewac_lower = Math.max(Math.round(resultGram) - 15, 0 );
            var ewac_upper = Math.max(Math.round(resultGram) + 15, 0);
            var ewac_units_lower = Math.max(Math.round(resultUnit) - 2,0);
            var ewac_units_upper = Math.max(Math.round(resultUnit) + 2,0);
            var resultCRound = parseFloat((audit1 + audit2 + audit3));
            $('.questionnaire_results .results_ukunits').text(ewac_units_lower + " - " + ewac_units_upper);
            $('.questionnaire_results .results_grams').text(ewac_lower + " - " + ewac_upper);
            $('.questionnaire_results .results_auditc').text(resultCRound);
            $('.questionnaire_steps').hide();
            $('.questionnaire_results').fadeIn();
        }
        nextItem.addClass('active');
        nextSpan.addClass('active');
        $('.questionnaire_step').removeClass('last');
        var last = $('.questionnaire_step').last();

        if (nextItem.is(last)) {
            nextItem.addClass('active last');

        }
        }

    });


    // click Previous

    $(".questionnaire_step_navigation .btn-group-prev button").on('click', function () {
        var prevItem = $('.questionnaire_step.active').removeClass('active').prev();
        var prevSpan = $('.progress_bar span.active').removeClass('active').prev();

        if (!prevItem.length) {
            prevItem = $('.questionnaire_step').first();
            $('.questionnaire_step').last().addClass('last');
        }
        prevItem.addClass('active');
        prevSpan.addClass('active');
        $('.questionnaire_step').removeClass('last');
        var first = $('.questionnaire_step').first();

        if (prevItem.is(first)) {
            prevItem.addClass('active first');
            $('.btn-group-prev').hide();

        }
    });


    // reset

    $('.btn-reset button').on('click', function () {
        $(".questionnaire_step").removeClass('active');
        $('.questionnaire_results').hide();
        $('.questionnaire_step .btn-toolbar button').removeClass('active');
        $('.btn-group-prev').hide();
        $('.screen1').fadeIn();
    });
});
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload()
    }
};