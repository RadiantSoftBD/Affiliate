!function(a){"use strict";function b(){var b=a(".hero-content-slider"),c=b.data("autoplay"),d=b.data("speed");a(window).width()>992?b.owlCarousel({animateOut:"bounceOut",animateIn:"bounceIn",autoplay:c,autoplayTimeout:d,items:1,dots:!1,mouseDrag:!1,touchDrag:!1,loop:!0}):b.owlCarousel({autoplay:!1,items:1,dots:!1,mouseDrag:!0,touchDrag:!0,loop:!0,autoHeight:!0})}function c(){a(".hero-content-slider").css({opacity:"1"})}function d(){var b=a(".hero-slider"),c=b.data("autoplay"),d=b.data("speed"),e=b.data("touch-drag");b.owlCarousel({autoplay:c,autoplayTimeout:d,items:1,mouseDrag:e,touchDrag:e,dots:!1,nav:!0,navSpeed:1600,dragEndSpeed:1400,loop:!0,animateOut:"fadeOut",animateIn:"fadeIn",autoHeight:!0,navText:['<i class="icon-arrows-left"></i>','<i class="icon-arrows-right"></i>']}),a(".hero-fullscreen>div").hasClass("hero-slider")?a(".hero-fullscreen").css({padding:"0"}):a(".hero-fullwidth>div").hasClass("hero-slider")&&a(".hero-fullwidth").css({padding:"0"})}function e(){var b=a(".carousel"),c=b.data("autoplay"),d=b.data("speed"),e=b.data("touch-drag"),f=b.data("loop");b.owlCarousel({autoplay:c,autoplayTimeout:d,items:1,mouseDrag:e,touchDrag:e,dots:!0,nav:!0,loop:f,autoHeight:!0,navText:['<i class="icon-arrows-left"></i>','<i class="icon-arrows-right"></i>'],navRewind:!0,slideBy:"page"})}function f(){var b=a(".app-carousel"),c=b.data("autoplay"),d=b.data("speed"),e=b.data("touch-drag"),f=b.data("loop");b.owlCarousel({autoplay:c,autoplayTimeout:d,items:1,mouseDrag:e,touchDrag:e,dots:!0,nav:!1,loop:f,autoHeight:!0,navText:['<i class="icon-arrows-left"></i>','<i class="icon-arrows-right"></i>'],navRewind:!0,slideBy:"page"})}function g(){function b(){a(".progress").each(function(){a(this).find(".progress-bar").animate({width:a(this).attr("data-percent")},800)})}"on"===a(".progress-bars").data("animate-on-scroll")?a(".progress-bars").waypoint(function(){b()},{offset:"100%",triggerOnce:!0}):b()}function h(){function b(){var a,b,c;c=document.querySelectorAll(".progress-svg");for(var d=0;d<c.length;d++)a=c[d].querySelector("circle").getAttribute("stroke-dasharray"),b=c[d].parentElement.getAttribute("data-circle-percent"),c[d].querySelector(".bar").style["stroke-dashoffset"]=a*b/100}"on"===a(".progress-circles").data("animate-on-scroll")?a(".progress-circle").waypoint(function(){b()},{offset:"70%",triggerOnce:!0}):b()}function i(){a(".video-container").on("click",function(){a(this).addClass("reveal");var b=a(this).find("img"),c=a(this).find("iframe"),d=c.attr("data-video-embed"),e=d+"?autoplay=1&autoplay=true";b.animate({opacity:0},300),c.css("visibility","visible").attr("src",e),c[0].setAttribute("allowFullScreen","")})}function j(){a(".screenshot-slider").owlCarousel({autoplay:!1,loop:!0,dots:!0,responsive:{0:{items:1},600:{items:2},1200:{items:4}}})}function k(){var b=a(".quote-slider");b.owlCarousel({autoplay:!1,autoplayTimeout:3e3,items:1,dots:!1,loop:!0,nav:!0,navText:['<i class="icon-arrows-left"></i>','<i class="icon-arrows-right"></i>']})}function l(){var f,b=a(".vossen-portfolio"),c=a(".vossen-portfolio-filters"),d=a(".vossen-portfolio-filters li"),e=a(".vossen-portfolio > div");c.each(function(){var b=a(this).attr("data-initial-filter");a(this).attr("data-initial-filter","."+b),".*"===a(c).data("initial-filter")&&a(this).attr("data-initial-filter","*")}),d.not(":first").each(function(){var b=a(this).attr("data-filter");a(this).attr("data-filter","."+b)}),e.each(function(){var b=a(this).attr("data-filter");a(this).addClass(b)}),e.waypoint(function(){e.each(function(b){var c=a(this);setTimeout(function(){c.addClass("reveal")},3*b*60)})},{offset:"100%",triggerOnce:!0}),f=a(".vossen-portfolio-filters").attr("data-initial-filter"),a('.vossen-portfolio-filters li[data-filter="'+f+'"]').addClass("active"),d.on("click",function(){a(".vossen-portfolio-filters li.active").removeClass("active"),a(this).addClass("active");var c=a(this).attr("data-filter");b.isotope({filter:c})});var g=b.isotope({itemSelector:".vossen-portfolio > div",percentPosition:!0,filter:f,masonry:{columnWidth:".vossen-portfolio > div"}});g.imagesLoaded().progress(function(){g.isotope("layout")})}function m(){var b=a(".testimonials"),c=b.data("autoplay"),d=b.data("speed");b.owlCarousel({autoplay:c,autoplayTimeout:d,autoplaySpeed:700,loop:!0,items:1,dots:!0,dotsSpeed:400})}function n(){var b=a(".clients-slider"),c=b.data("autoplay"),d=b.data("speed");b.owlCarousel({autoplay:c,autoplayTimeout:d,loop:!0,dots:!1,nav:!1,responsiveRefreshRate:200,responsive:{0:{items:2},600:{items:5},1200:{items:6}}})}function o(){a("#contactform").submit(function(){var b="php/contact-form.php";return a("#message-info").slideUp(250,function(){a("#message-info").hide(),a("#submit").after('<div class="loader"><div></div></div>').attr("disabled","disabled"),a.post(b,{name:a("#name").val(),email:a("#email").val(),phone:a("#phone").val(),message:a("#message").val()},function(b){document.getElementById("message-info").innerHTML=b,a("#message-info").slideDown(250),a("#contactform .loader div").fadeOut("slow",function(){a(this).remove()}),a("#submit").removeAttr("disabled"),null!==b.match("success")&&a("#contactform").slideUp(850,"easeInOutExpo")})}),!1})}function p(){a("#subscribe-form,#subscribe-form-2").on("submit",function(b){b.preventDefault();var c=a(this),d=c.find(".form-validation"),e=c.find("button"),f=c.attr("action");e.button("loading"),d.removeClass("alert-danger alert-success"),d.html(""),a.ajax({type:"POST",url:f,data:c.serialize()+"&ajax=1",dataType:"JSON",success:function(a){"error"===a.status?(d.html(a.message),d.addClass("alert-danger").fadeIn(500)):(c.trigger("reset"),d.html(a.message),d.addClass("alert-success").fadeIn(500)),e.button("reset")}})})}function q(){a("#vossen-map").waypoint(function(){initVossenMaps()},{offset:"100%",triggerOnce:!0})}function r(){function b(){a(window).scroll(function(){a(window).scrollTop()>70?a("nav").addClass("nav-small"):a("nav").removeClass("nav-small")})}function e(){var b=window.location.hash;""!=b&&setTimeout(function(){a("html, body").stop().animate({scrollTop:a(b).offset().top-59},1e3,"easeInOutExpo"),history.pushState("",document.title,window.location.pathname)},500)}if(a(".nav li.dropdown>a, .dropdown-submenu>a").on("click",function(){return a(this).closest(".dropdown").siblings().removeClass("open"),a(this).closest(".dropdown").toggleClass("open"),!1}),a(".nav li a, .btn-scroll").on("click",function(){function c(){a("html, body").stop().animate({scrollTop:a(b.attr("href")).offset().top-d},1e3,"easeInOutExpo"),event.preventDefault()}var b=a(this);if(a(window).width()>992){var d="0";c()}else{var d="0";c()}}),"hiding"===a("nav").data("animation")){var c=a(window),d=c.scrollTop();c.scroll(function(){c.scrollTop()>d?a("nav").removeClass("nav-down").addClass("nav-up"):a("nav").removeClass("nav-up").addClass("nav-down"),d=c.scrollTop()})}else b();a(".scroll-top").on("click",function(){return a("html, body").stop().animate({scrollTop:0},2e3,"easeInOutExpo"),!1}),e()}function s(){a("#accordion,#accordion2").on("show.bs.collapse",function(){a("#accordion .in").collapse("hide")}),a("[data-toggle='tooltip']").tooltip(),a("#buttonTabs a,#iconTabs a").on("click",function(b){b.preventDefault(),a(this).tab("show")})}function t(){if(a("#twitter-feed-slider").length){var b,c,d;b=a("#twitter-feed-slider").attr("data-twitter-widget-id"),c=a("#twitter-feed-slider").attr("data-max-tweets"),d={id:b,domId:"twitter-feed-slider",maxTweets:c,enableLinks:!0,showImages:!1},twitterFetcher.fetch(d)}}function u(){if(a("#twitter-feed-slider").length){a("#twitter-feed-slider ul").addClass("twitter-feed-slider navigation-thin").addClass("owl-theme").addClass("owl-carousel");var b=a("#twitter-feed-slider").attr("data-slider-speed");a(".twitter-feed-slider").owlCarousel({autoplay:!0,autoplayTimeout:b,items:1,dots:!1,mouseDrag:!0,touchDrag:!0,loop:!0})}}function v(){if(a("#twitter-feed-list").length){var b,c,d;b=a("#twitter-feed-list").attr("data-twitter-widget-id"),c=a("#twitter-feed-list").attr("data-max-tweets"),d={id:b,domId:"twitter-feed-list",maxTweets:c,enableLinks:!0,showImages:!1},twitterFetcher.fetch(d)}}function w(){a("#fun-facts").waypoint(function(){a(".counter h1").each(function(){var b=a(this),c=b.attr("data-count");a({countNum:b.text()}).animate({countNum:c},{duration:1700,easing:"linear",step:function(){b.text(Math.floor(this.countNum))},complete:function(){b.text(this.countNum)}})})},{offset:"100%",triggerOnce:!0})}function x(){function d(){var b=Date(),d=Date.parse(c)-Date.parse(b);if(d<=0)clearInterval(e);else{var f=Math.floor(d/1e3%60),g=Math.floor(d/1e3/60%60),h=Math.floor(d/1e3/60/60%24),i=Math.floor(d/864e5%30.5),j=Math.floor(d/26352e5%12);a("#months").text(("0"+j).slice(-2)),a("#days").text(("0"+i).slice(-2)),a("#hours").text(("0"+h).slice(-2)),a("#minutes").text(("0"+g).slice(-2)),a("#seconds").text(("0"+f).slice(-2))}}var b=a("#countdown-timer").attr("data-date"),c=new Date(b),e=setInterval(d,1e3)}function y(){var b=a(".vossen-blog-grid"),c=a(".vossen-blog-grid > div");c.each(function(){var b=a(this).attr("data-filter");a(this).addClass(b)}),c.waypoint(function(){c.each(function(b){var c=a(this);setTimeout(function(){c.addClass("reveal")},3*b*60)})},{offset:"100%",triggerOnce:!0}),b.isotope({itemSelector:".vossen-blog-grid > div",percentPosition:!0,masonry:{columnWidth:".vossen-blog-grid > div"}});var d=b.isotope({itemSelector:".vossen-blog-grid > div",percentPosition:!0,masonry:{columnWidth:".vossen-blog-grid > div"}});d.imagesLoaded().progress(function(){d.isotope("layout")})}function z(){a(".lightbox").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><img src="img/assets/slider-left-thin-arrow.png"></button>'},mainClass:"mfp-zoom-in",removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim")}},closeMarkup:'<button title="%title%" type="button" class="mfp-close"></button>',midClick:!0}),a(".popup-video, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,closeMarkup:'<button title="%title%" type="button" class="mfp-close"></button>',midClick:!0,fixedContentPos:!1,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"https://www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"https://player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"https://maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"}})}function A(){window.sr=ScrollReveal({duration:1300,mobile:!0});var a={origin:"top"},b={origin:"bottom"},c={origin:"left"},d={origin:"right"};sr.reveal('[data-reveal="top"]',a),sr.reveal('[data-reveal="bottom"]',b),sr.reveal('[data-reveal="left"]',c),sr.reveal('[data-reveal="right"]',d)}a(window).resize(function(){setTimeout(function(){a(".vossen-portfolio-filters .active").trigger("click")},600)}),a(document).ready(function(){A(),a.when(b()).then(c()),d(),g(),h(),j(),w(),i(),k(),parallaxVossen(),l(),m(),n(),o(),p(),q(),e(),f(),r(),s(),t(),v(),x(),y(),z()}),a(window).load(function(){u()}),a(window).on("scroll",function(){})}(jQuery);
