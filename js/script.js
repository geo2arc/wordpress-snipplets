jQuery(document).ready(function($) {

/*--- # FILTERS: FacetWP Filters Accordion Menu (fitya, tgc) ---*/

// prevent page from jumping to top from  # href link
$('.menu-top-menu-container li.menu-item-has-children > a').click(function(e) {
		e.preventDefault();
});

// remove link from menu items that have children
$(".menu-top-menu-container li.menu-item-has-children > a").attr("href", "#");

//  open / close menu items (thegiftcentral)

$(".facetwp-facet-product_categories > .facetwp-checkbox").click(function(e) {
	e.preventDefault();
	$(this).toggleClass('open');
		var link = $(this);
		var closest_ul = link.next(".facetwp-facet-product_categories");
		var parallel_active_links = closest_ul.find(".active")
		var closest_li = link.closest('.facetwp-depth');
		var link_status = closest_li.hasClass("active");
		var count = 0;

		closest_ul.find(".facetwp-depth").slideUp(function() {
				if (++count == closest_ul.find(".facetwp-depth").length)
						parallel_active_links.removeClass("active");
		});

		if (!link_status) {
				closest_li.children(".facetwp-depth").slideDown();
				closest_li.addClass("active");
		}

})

$(".facet-title").click(function() {
	$(this).toggleClass('open');
		var link = $(this);
		var closest_ul = link.closest(".facet-menu");
		var parallel_active_links = closest_ul.find(".active")
		var closest_li = link.closest('.facet-dropdown');
		var link_status = closest_li.hasClass("active");
		var count = 0;

		closest_ul.find(".facetwp-type-checkboxes").slideUp(function() {
				if (++count == closest_ul.find(".facetwp-type-checkboxes").length)
						parallel_active_links.removeClass("active");
		});

		if (!link_status) {
				closest_li.children(".facetwp-type-checkboxes").slideDown();
				closest_li.addClass("active");
		}
})

/*--- # FILTERS: Checkbox - Parent add class "has-children" (tgc, geo2arc) ----*/

$(document).on('facetwp-loaded', function() {
	$('.facetwp-depth').prev().addClass('has-children');
});


/* --- #FILTERS: Selections Box - Bugs (ecodomisi, fitya, tgc, geo2arc) --- **/

wp.hooks.addAction('facetwp/loaded', function() {
	var datavalue;
	$('.facetwp-selections li').each(function() {
		var datavalue = $(this).attr('data-facet');
		var text = $(this).text().replace('undefined', '' + datavalue + '').replace('_', ' ');
		$(this).text(text);
	});
	
	/* 	$('.facetwp-selections li[data-facet="instructor"]').each(function() {
		var text = $(this).text().replace('undefined', 'Instructor');
		$(this).text(text);
	}); */
}, 12);


}); //jQuery
