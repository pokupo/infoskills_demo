//	Scroll to top

$(window).scroll(function(){
  var $scrollup = $('.back-to-top');
  if ($(this).scrollTop() > 120) { $scrollup.fadeIn(); $('header').addClass("sticky"); }
  else { $scrollup.fadeOut(); $('header').removeClass("sticky"); }
  
});

jQuery('.back-to-top').click(function () {
  jQuery("html, body").animate({
	  scrollTop: 0
  }, 600);
  return false;
});	  
	  

$(document).click(function (e){ // событие клика по веб-документу
	var div = $("#menu-click");
	var div2 = $("#menu-click-list");
	var inp1 = $("input.btn-search-click");
	var inp2 = $("input.btn_close-click");
	var form1 = $("div.search-click-slide-form");	
	if (!div.is(e.target) && div.has(e.target).length === 0 && div.prop("checked") && !div2.is(e.target) && div2.has(e.target).length === 0)	{ 
		    div.removeAttr("checked");
		}
	if (!form1.is(e.target) && form1.has(e.target).length === 0 && inp1.prop("checked") && !inp2.prop("checked") && !inp1.is(e.target) && inp1.has(e.target).length === 0)	{ 
		    inp1.removeAttr("checked");
		}

	if (inp1.prop("checked") && !inp2.prop("checked") && inp2.is(e.target) && inp2.has(e.target).length === 0)	{ 
		    inp1.removeAttr("checked");
		}		
		
});


// Choose payment method

$(document).click(function (e){

	$('li.pkp-payment-method__list-item a').click(function(){
		var tx = $(this).html();
		var tv = $(this).attr('href');
		tv = tv.replace('#','');
		$(".pkp-payment-method__choose").html(tx);
		$("input.pkp-payment-method__btn").removeAttr("checked");
		$(".pkp-payment-method__item").each(function(indx){
			if($(this).hasClass("active")){	
				$(this).removeClass("active");
			}			  
			if($(this).hasClass(tv)){	
				$(this).addClass("active");
			}
		});
	});
})

// Add review form

$(".add-review-button").click(function(e) {
	e.preventDefault();
	$(".add-review-form").toggleClass("add-review-form--open");
	$(this).hide();
});

$(".add-review-form__reset").click(function() {
	$(".add-review-form").toggleClass("add-review-form--open");
	$(".add-review-button").show();
});

// Content page -> Help -> Show answer

$(".main-content_help-question").click(function() {
	if ($(this).children(".main-content_help-answer").css("display") == "block") {
		$(this).children(".main-content_help-answer").hide();
	} else {
		$(this).children(".main-content_help-answer").show();
	}
	return false;
});


// Store preview gallery

$(".img-fon img").click(function() {
	var itemImage = $(this).clone();
	$(".product-info__img-fon img").remove();
	$(".product-info__img-fon").append(itemImage);
});


// Product characteristics tab

$(".product-about__menu-item").click(function() {
	event.preventDefault();
	for (var i = 0; i < $(".product-about__menu-item").length; i++) {
		$(".product-about__menu-item").removeClass("product-about__menu-item--active");
	}
	$(this).addClass("product-about__menu-item--active");

	if ($(this).hasClass("product-about__menu-item--characteristics")) {
		$(".product-characteristics").show();
		$(".product-desc").hide();
		$(".product-delivery").hide();
	}

	if ($(this).hasClass("product-about__menu-item--description")) {
		$(".product-characteristics").hide();
		$(".product-desc").show();
		$(".product-delivery").hide();
	}

	if ($(this).hasClass("product-about__menu-item--delivery")) {
		$(".product-characteristics").hide();
		$(".product-desc").hide();
		$(".product-delivery").show();
	}
});


// Advanced search

$(".advanced-search__top-button").click(function() {
	if ($(this).hasClass("advanced-search__top-button--close")) {
		$(this).addClass("advanced-search__top-button--open");
		$(this).removeClass("advanced-search__top-button--close");
		$(".advanced-search__bottom").slideDown();
		$(".advanced-search__form select").css("display", "inline-block");
		$(".advanced-search__form select + div").css("display", "none");
		$(".advanced-search__form input + label").css("display", "none");
	} else {
		$(this).addClass("advanced-search__top-button--close");
		$(this).removeClass("advanced-search__top-button--open");
		$(".advanced-search__bottom").slideUp();
	}
});

function hideLabel() {
		$(".advanced-search__form input + label").hide();
	};

$(".advanced-search__form input").keyup(function() {
	setTimeout(hideLabel, 10);
});

// Advanced search slider range (jQuery UI)

$( function() {
    $( ".advanced-search__price-range" ).slider({
      range: true,
      min: 100,
      max: 9999,
      values: [ 100, 5000 ],
      slide: function( event, ui ) {
        $( "#advanced-search__min-price" ).val( ui.values[ 0 ] );
        $( "#advanced-search__max-price" ).val( ui.values[ 1 ] );
      }
    });
    $( "#advanced-search__min-price" ).val( $( ".advanced-search__price-range" ).slider( "values", 0 ) );
    $( "#advanced-search__max-price" ).val( $( ".advanced-search__price-range" ).slider( "values", 1 ) );
  } );

