/*global window, jQuery, rJS */
(function (window, $, rJS) {
  "use strict";
  rJS(window).ready(function () {
console.log(jQuery);
console.log($);
console.log(jQuery === $);
    rJS(window).declareMethod('setContent', function (value) {
      var data = JSON.parse(value);
      $(function(){
          $('#jQuerySheet0').sheet({
              title: 'Spreadsheet',
              inlineMenu: undefined,
              buildSheet: true,
              urlMenu: false,
              height: $(window).height() - 20,
              width: $(window).width() - 20,
          });
          $('#jQuerySheet0').getSheet().openSheet($.sheet.makeTable.json(data));
      });

    }).declareMethod('getContent', function () {
      return JSON.stringify($('#jQuerySheet0').getSheet().exportSheet.json());

    }).declareMethod('setReadOnly', function (isReadOnly) {

    });
  });
}(window, jQuery, rJS))
