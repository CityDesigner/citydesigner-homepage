$( document ).ready(function() {

  var cardToggle = $('.card__header');

  cardToggle.click( function () {

    var card = $(this).parent();
    var cardBody = card.find('.card__body');


    if (card.hasClass('expanded')) {
      cardBody.slideUp();
      card.removeClass('expanded');
      // cardToggle.not(this).each(function() {
      //   $(this).parent().addClass('blue');
      // })
    } else {
      cardBody.slideDown();
      card.addClass('expanded');
      cardToggle.not(this).each(function() {
        var card = $(this).parent();
        var cardBody = card.find('.card__body');
        cardBody.slideUp();
        card.removeClass('expanded');
      })
    }

  });


$('#accordion').find('.accordion-toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');

    });


});
