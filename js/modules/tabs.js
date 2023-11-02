$(document).ready(function () {
  $('.tabs-switch li').on('click', function () {
    if (!$(this).hasClass('active')) {
      let tabsContainer = $(this).closest('.tabs-wrap');
      let filter = $(this).data('filter');
      let $deff = $(window).width() / 2 - $(this).width() / 2 - 20;
      let $container = $(this).closest('.tabs-container');

      $(this).closest('.tabs-switch').find('li').removeClass('active');
      $(this).addClass('active');
      tabsContainer.animate(
        { scrollLeft: $(this).offset().left + tabsContainer.scrollLeft() - $deff },
        200,
      );

      $container.find('.tabs-content > div').removeClass('active');

      if (filter == 'all') {
        $container.find('.tabs-content > div').fadeIn();
      } else {
        $container.find('.tabs-content > div').hide();
        $container
          .find('.tabs-content > div[data-term="' + filter + '"]')
          .addClass('active')
          .fadeIn();
      }
    }
  });
});
