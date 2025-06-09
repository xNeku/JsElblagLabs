$(function () {
  const actions = [
    {
      label: "Descendant selector: color Name cells",
      run: () => $('#data-table tbody td.cell').toggleClass('highlighted')
    },
    {
      label: "Children selector: highlight header row",
      run: () => $('#data-table thead').children().toggleClass('highlighted')
    },
    {
      label: "Adjacent selector: fade Age cell next to Alice",
      run: () => $('td:contains("Alice") + td').fadeToggle()
    },
    {
      label: "Attribute = value: Bold teacher's row",
      run: () => $('td[data-person="teacher"]').parent().toggleClass('highlighted')
    },
    {
      label: "Attribute starts with 'a': Yellow background",
      run: () => $('td[data-person^="a"]').toggleClass('highlighted')
    },
    {
      label: "Attribute ends with 'n': Italic admin cells",
      run: () => $('td[data-person$="n"]').toggleClass('highlighted')
    },
    {
      label: "Attribute contains 'stud': Highlight student cells",
      run: () => $('td[data-person*="stud"]').toggleClass('highlighted')
    },
    {
      label: "Even rows filter",
      run: () => $('#data-table tbody tr:even').toggleClass('highlighted')
    },
    {
      label: "Odd rows filter",
      run: () => $('#data-table tbody tr:odd').toggleClass('highlighted')
    },
    {
      label: "Class selector on even rows",
      run: () => $('table.fancy-table tbody tr:even').toggleClass('highlighted')
    },
    {
      label: "First & last table cells",
      run: () => {
        $('#data-table tbody td:first').toggleClass('highlighted');
        $('#data-table tbody td:last').toggleClass('highlighted');
      }
    },
    {
      label: "Exclude elements with .note",
      run: () => $('#data-table td:not(.note)').toggleClass('highlighted')
    },
    {
      label: "Cells containing .note",
      run: () => $('#data-table td:has(.note)').toggleClass('highlighted')
    },
    {
      label: "Cells containing 'curious'",
      run: () => $('#data-table td:contains("curious")').toggleClass('highlighted')
    },
    {
      label: "Slide toggle hidden rows",
      run: () => $('#data-table tr:hidden').slideToggle()
    }
  ];

  actions.forEach((action, i) => {
    const btn = $(`<button>${i + 1}. ${action.label}</button>`);
    btn.on('click', function () {
      action.run();
      $(this).toggleClass('active');
    });
    $('#buttons-container').append(btn);
  });
});
