/* Use the spectacular CSS3 Pie (http://css3pie.com) with jQuery ! */
;(function($) {
   $.fn.css3PIE = function(options) {
     var opts = $.extend({}, { htcUrl:'js/PIE.htc' }, options);  // "htcUrl" defines the path where the htc is located
     return this.css('behavior', 'url('+opts.htcUrl+')'); // ok it's time to rock :)
   };
})(jQuery); // jquery goodness !!!