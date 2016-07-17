/*

My Custom JS
============

Author:  Adrian Prieto
Updated: July 2016
Notes:	 Hand coded for Learn.co

*/

$(function() {

  $('#alertMe').click(function(e) {

    e.preventDefault();

    $('#successAlert').slideDown();

  });

  $('a.pop').click(function(e) {
      e.preventDefault();
  });

  $('a.pop').popover();

  $('[rel="tooltip"]').tooltip();

});
