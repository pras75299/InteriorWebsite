(function ($, window, document, undefined) {
    'use strict';
	
	jQuery(document).ready(function(){

	/* ==============================================
		REVOLUTION SLIDER
	=============================================== */
											
		jQuery('.tp-banner').show().revolution(
		{
			dottedOverlay:"none",
			delay:9000,
			startwidth:1170,
			startheight:700,
			hideThumbs:200,
			
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,
			
			navigationType:"none",
			navigationArrows:"solo",
			navigationStyle:"preview1",
			
			touchenabled:"off",
			onHoverStop:"off",
			
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,
									
									
			keyboardNavigation:"off",
			
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,

			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,

			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
					
			shadow:0,
			fullWidth:"off",
			fullScreen:"on",

			spinner:"spinner0",
			
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,

			shuffle:"off",
			hideTimerBar:"on",
									
			forceFullWidth:"off",                       
			fullScreenAlignForce:"off",                     
			minFullScreenHeight:"400",                      
									
			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,                      
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			fullScreenOffsetContainer: ".header"    
		});                                        

		
		(function () {

			window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {   

				return true;
			}

		})();
	
	/* ==============================================
		COUNTDOWN CALL
	=============================================== */

	if($.find('#counter')[0]) {
			$('#counter').countdown('2017/01/24 12:00:00').on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
					+ '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d<span></div>'
					+ '<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>'
					+ '<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>'
					+ '<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
				));
			});
		};

	/* ==============================================
		CONTACT FORM
	=============================================== */

		$('#contactform').submit(function(){

			var action = $(this).attr('action');

			$("#message").slideUp(750,function() {
			$('#message').hide();

			$('#submit')
				.after('<img src="assets/img/ajax-loader.gif" class="loader" />')
				.attr('disabled','disabled');

			$.post(action, {
				name: $('#name').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				comments: $('#comments').val(),
			},
				function(data){
					document.getElementById('message').innerHTML = data;
					$('#message').slideDown('slow');
					$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled');
					if(data.match('success') != null) $('#contactform').slideUp('slow');
				}
			);

			});

			return false;

		});

	/* ==============================================
		OWL CAROUSEL
	=============================================== */

		$('#owl-demo').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});

		$('#owl-testimonials, #owl-office').owlCarousel({
		  navigation : false,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem:true                              
		});
	 
	});
	
	$(window).load(function(){
	/* ==============================================
		STICKY NAVBAR CALL
	=============================================== */

		$("#header").sticky({ topSpacing: 0 });

	/* ==============================================
		PAGE PRELOADER
	=============================================== */

		jQuery("#preloader").delay(900).fadeOut(500); 
		
	});

	/* ==============================================
		OFF-CANVAS NAV
	=============================================== */
	
	$(function() {
		var $menu = $('nav#menu'),
			$html = $('html, body');

		$menu.mmenu({
			dragOpen: true
		});

		$menu.find( 'li > a' ).on( 'click',
			function()
			{
				var href = $(this).attr( 'href' );

				//  if the clicked link is linked to an anchor, scroll the page to that anchor 
				if ( href.slice( 0, 1 ) == '#' )
				{
					$menu.one(
						'closed.mm',
						function()
						{
							setTimeout(
								function()
								{
									$html.animate({
										scrollTop: $( href ).offset().top
									}); 
								}, 10
							);  
						}
					);                      
				}
			}
		);
	});

	/* ==============================================
		SMOOTH SCROLLING
	=============================================== */

	$('body').scrollspy();

		$(".navbar ul li a[href^='#']").on('click', function(e) {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
			scrollTop: $(this.hash).offset().top
			}, 1000, function(){
			window.location.hash = hash;
		});
	}); 

	 /* ==============================================
		CUBE PORTFOLIO
	=============================================== */

	var gridContainer = $('#grid-container'),
		filtersContainer = $('#filters-container'),
		gridBlog = $('#grid-blog'),
		filtersBlog = $('#filters-blog'),
		wrap, filtersCallback;


	/*********************************
	 init cubeportfolio
	 *********************************/
	gridContainer.cubeportfolio({

		defaultFilter: '*',

		animationType: 'flipOutDelay',

		gapHorizontal: 30,

		gapVertical: 30,

		gridAdjustment: 'responsive',

		caption: 'revealBottom',

		displayType: 'lazyLoading',

		displayTypeSpeed: 100,

		// lightbox
		lightboxDelegate: '.cbp-lightbox',
		lightboxGallery: true,
		lightboxTitleSrc: 'data-title',
		lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

		// singlePage popup
		singlePageDelegate: '.cbp-singlePage',
		singlePageDeeplinking: true,
		singlePageStickyNavigation: true,
		singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
		singlePageCallback: function (url, element) {

			// to update singlePage content use the following method: this.updateSinglePage(yourContent)
			var t = this;

			$.ajax({
				url: url,
				type: 'GET',
				dataType: 'html',
				timeout: 5000
			})
				.done(function (result) {
					t.updateSinglePage(result);
				})
				.fail(function () {
					t.updateSinglePage("Error! Please refresh the page!");
				});

		},

		// single page inline
		singlePageInlineDelegate: '.cbp-singlePageInline',
		singlePageInlinePosition: 'above',
		singlePageInlineInFocus: true,
		singlePageInlineCallback: function (url, element) {
			// to update singlePage Inline content use the following method: this.updateSinglePageInline(yourContent)
		}
	});


	/*********************************
	 add listener for filters
	 *********************************/
	if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {

		wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');

		wrap.on({
			'mouseover.cbp': function () {
				wrap.addClass('cbp-l-filters-dropdownWrap-open');
			},
			'mouseleave.cbp': function () {
				wrap.removeClass('cbp-l-filters-dropdownWrap-open');
			}
		});

		filtersCallback = function (me) {
			wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');

			wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());

			me.addClass('cbp-filter-item-active');

			wrap.trigger('mouseleave.cbp');
		};

	} else {
		filtersCallback = function (me) {
			me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
		};
	}

	filtersContainer.on('click.cbp', '.cbp-filter-item', function () {

		var me = $(this);

		if (me.hasClass('cbp-filter-item-active')) {
			return;
		}

		// get cubeportfolio data and check if is still animating (reposition) the items.
		if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
			filtersCallback.call(null, me);
		}

		// filter the items
		gridContainer.cubeportfolio('filter', me.data('filter'), function () {
		});

	});


	/*********************************
	 activate counter for filters
	 *********************************/
	gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'), function () {
		// read from url and change filter active
		var match = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href),
			item;
		if (match !== null) {
			item = filtersContainer.find('.cbp-filter-item').filter('[data-filter="' + match[1] + '"]');
			if (item.length) {
				filtersCallback.call(null, item);
			}
		}
	});


	/*********************************
	 add listener for load more
	 *********************************/
	$('.cbp-l-loadMore-button-link').on('click.cbp', function (e) {

		e.preventDefault();

		var clicks, me = $(this),
			oMsg;

		if (me.hasClass('cbp-l-loadMore-button-stop')) {
			return;
		}

		// get the number of times the loadMore link has been clicked
		clicks = $.data(this, 'numberOfClicks');
		clicks = (clicks) ? ++clicks : 1;
		$.data(this, 'numberOfClicks', clicks);

		// set loading status
		oMsg = me.text();
		me.text('LOADING...');

		// perform ajax request
		$.ajax({
			url: me.attr('href'),
			type: 'GET',
			dataType: 'HTML'
		}).done(function (result) {
			var items, itemsNext;

			// find current container
			items = $(result).filter(function () {
				return $(this).is('div' + '.cbp-loadMore-block' + clicks);
			});

			gridContainer.cubeportfolio('appendItems', items.html(),
				function () {
					// put the original message back
					me.text(oMsg);

					// check if we have more works
					itemsNext = $(result).filter(function () {
						return $(this).is('div' + '.cbp-loadMore-block' + (clicks + 1));
					});

					if (itemsNext.length === 0) {
						me.text('NO MORE WORKS');
						me.addClass('cbp-l-loadMore-button-stop');
					}

				});

		}).fail(function () {
			// error
		});

	});

	/*Blog*/
	gridBlog.cubeportfolio({

		defaultFilter: '*',

		animationType: 'flipOutDelay', 

		gapVertical: 30,

		gridAdjustment: 'responsive',

		caption: 'revealBottom',

		displayType: 'lazyLoading',

		displayTypeSpeed: 100,

		// lightbox
		lightboxDelegate: '.cbp-lightbox',
		lightboxGallery: true,
		lightboxTitleSrc: 'data-title',
		lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

		// singlePage popup
		singlePageDelegate: '.cbp-singlePage',
		singlePageDeeplinking: true,
		singlePageStickyNavigation: true,
		singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
		singlePageCallback: function (url, element) {

			// to update singlePage content use the following method: this.updateSinglePage(yourContent)
			var t = this;

			$.ajax({
				url: url,
				type: 'GET',
				dataType: 'html',
				timeout: 5000
			})
				.done(function (result) {
					t.updateSinglePage(result);
				})
				.fail(function () {
					t.updateSinglePage("Error! Please refresh the page!");
				});

		},

		// single page inline
		singlePageInlineDelegate: '.cbp-singlePageInline',
		singlePageInlinePosition: 'above',
		singlePageInlineInFocus: true,
		singlePageInlineCallback: function (url, element) {
			// to update singlePage Inline content use the following method: this.updateSinglePageInline(yourContent)
		}
	});


	/*********************************
	 add listener for filters
	 *********************************/
	if (filtersBlog.hasClass('cbp-l-filters-dropdown')) {

		wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');

		wrap.on({
			'mouseover.cbp': function () {
				wrap.addClass('cbp-l-filters-dropdownWrap-open');
			},
			'mouseleave.cbp': function () {
				wrap.removeClass('cbp-l-filters-dropdownWrap-open');
			}
		});

		filtersCallback = function (me) {
			wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');

			wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());

			me.addClass('cbp-filter-item-active');

			wrap.trigger('mouseleave.cbp');
		};

	} else {
		filtersCallback = function (me) {
			me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
		};
	}

	filtersBlog.on('click.cbp', '.cbp-filter-item', function () {

		var me = $(this);

		if (me.hasClass('cbp-filter-item-active')) {
			return;
		}

		// get cubeportfolio data and check if is still animating (reposition) the items.
		if (!$.data(gridBlog[0], 'cubeportfolio').isAnimating) {
			filtersCallback.call(null, me);
		}

		// filter the items
		gridBlog.cubeportfolio('filter', me.data('filter'), function () {
		});

	});


	/*********************************
	 activate counter for filters
	 *********************************/
	gridBlog.cubeportfolio('showCounter', filtersBlog.find('.cbp-filter-item'), function () {
		// read from url and change filter active
		var match = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href),
			item;
		if (match !== null) {
			item = filtersBlog.find('.cbp-filter-item').filter('[data-filter="' + match[1] + '"]');
			if (item.length) {
				filtersCallback.call(null, item);
			}
		}
	});


	/*********************************
	 add listener for load more
	 *********************************/
	$('.cbp-l-loadMore-button-link').on('click.cbp', function (e) {

		e.preventDefault();

		var clicks, me = $(this),
			oMsg;

		if (me.hasClass('cbp-l-loadMore-button-stop')) {
			return;
		}

		// get the number of times the loadMore link has been clicked
		clicks = $.data(this, 'numberOfClicks');
		clicks = (clicks) ? ++clicks : 1;
		$.data(this, 'numberOfClicks', clicks);

		// set loading status
		oMsg = me.text();
		me.text('LOADING...');

		// perform ajax request
		$.ajax({
			url: me.attr('href'),
			type: 'GET',
			dataType: 'HTML'
		}).done(function (result) {
			var items, itemsNext;

			// find current container
			items = $(result).filter(function () {
				return $(this).is('div' + '.cbp-loadMore-block' + clicks);
			});

			gridBlog.cubeportfolio('appendItems', items.html(),
				function () {
					// put the original message back
					me.text(oMsg);

					// check if we have more works
					itemsNext = $(result).filter(function () {
						return $(this).is('div' + '.cbp-loadMore-block' + (clicks + 1));
					});

					if (itemsNext.length === 0) {
						me.text('NO MORE WORKS');
						me.addClass('cbp-l-loadMore-button-stop');
					}

				});

		}).fail(function () {
			// error
		});

	});

	    


})(jQuery, window, document);
