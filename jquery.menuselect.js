(function($) {
  var default_settings = {
    class: 'menu_selector'	  
  };

  $.fn.menuSelect = function(obj) {

	    // use this plugin on a ul tag and it returns a selector with 
		// each li element link as an option
	  	var li = $(this).find('li'),
	        links_array = {};
	  
		var settings = $.extend({}, default_settings, obj || {});

	      li.each(function(index,element) {
	          var a_elem =  $(element).find('a');
	          links_array[index] = {
	              text: a_elem.text(),
	              href: a_elem.attr('href'),
	          };
	      });
      
		  var menu = $('<select></select');
	  
		  for (var setting in settings) {
			  menu.attr(setting,settings[setting]);
		  }
      
	      for (var i in links_array) {
	      	var link = links_array[i];
	      	var option = $('<option/>', { text: link.text, value: link.href } );
	      	menu.append(option);
	      }
      
	      menu.change( function() {
	      	var opt = $(this).find('option:selected').val();
	      	window.location.href = opt;
	      });
		
	    return menu;
  }
})(jQuery)