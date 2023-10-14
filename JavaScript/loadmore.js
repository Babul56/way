$(function() {
    $(".load").slice(0, 6).show();
    $("#loadMore").on('click', function(e) {
      e.preventDefault();
      $(".load:hidden").slice(0, 3).slideDown();
      if ($(".load:hidden").length == 0) {
        $("#loadLess").fadeIn('slow');
        $("#loadMore").hide();
        // $("#loadMore").text('Load only the first 4');
      }
      $('html,body').animate({
        scrollTop: $(this).offset().middle
      }, 500);
    });
  
    $("#loadLess").on('click', function(e) {
      e.preventDefault();
      $('.load:not(:lt(3))').fadeOut();
      $("#loadMore").fadeIn('slow');
      $("#loadLess").hide();
  
      desiredHeight = $(window).height();
  
      $('html,body').animate({
        scrollTop: $(this).offset().middle + desiredHeight
      }, 500);
    });
  
  });