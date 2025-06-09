$(document).ready(function () {
  // DUPLICATE QUOTES with new class
  $('.quote-marked').each(function () {
    const duplicate = $(this).clone().removeClass('quote-marked').addClass('quote-box');
    $(this).before(duplicate);
  });

  // DOUBLE CLICK EVENT
  $(document).on('dblclick', function () {
    alert("Double-click detected on the page!");
  });

  // HOVER EVENT
  $('.hover-link').hover(function () {
    const msg = "<p>You hovered a link!</p>";
    $('.hover-output').append(msg);
  });

  // CLICK EVENT to change text
  $('#changeText').on('click', function () {
    $(this).val("Clicked!");
  });

  // CREATE BUTTONS WITH STYLES
  const styles = [
    'style-red', 'style-green', 'style-yellow', 'style-italic', 'style-caps'
  ];

  for (let i = 1; i <= 10; i++) {
    const button = $(`<input type="button" value="Style ${i}" class="styled-btn" id="btn${i}">`);
    $('#dynamic-buttons').append(button).append('<br><br>');

    button.on('click', function () {
      const target = $('#quotes-section p').eq((i - 1) % 3);
      const className = styles[(i - 1) % styles.length];
      target.addClass(className);
      const tag = target.prop("tagName");

      $('.hover-output').append(`<p>Button ${i} applied class "${className}" to a ${tag}</p>`);
      $(this).val(`Clicked ${i}`);
    });
  }
});
