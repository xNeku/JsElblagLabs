$(function () {
  // Dashboard panel hover animation
  $('#dashboard').hover(
    function () {
      $(this).stop().animate(
        {
          left: '0',
          backgroundColor: 'rgb(234, 250, 241)'  // menta muy suave
        },
        500,
        'easeInSine'
      );
    },
    function () {
      $(this).stop().animate(
        {
          left: '-92px',
          backgroundColor: 'rgb(74, 158, 140)'  // tono menta oscuro
        },
        1500,
        'easeOutBounce'
      );
    }
  );

  // Hover effect on thumbnails: swap to *_h (hover) images
  $('#dashboard img').each(function () {
    const originalSrc = $(this).attr('src');
    const imgExt = /(\.\w{3,4})$/;
    const hoverSrc = originalSrc.replace(imgExt, '_h$1');

    // Preload hover image
    new Image().src = hoverSrc;

    $(this).hover(
      () => $(this).attr('src', hoverSrc),
      () => $(this).attr('src', originalSrc)
    );
  });

  // Fancybox auto-initializes via data-fancybox attribute
});
