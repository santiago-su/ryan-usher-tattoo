// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require photoswipe
//= require_tree .

$(document).ready(function() {
  $('.slick-carousel').slick({
    lazyLoad: 'ondemand',
    dots: true,
    autoplay: true,
    infinite: false,
    variableWidth: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          fade: true,
          cssEase: 'linear',
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      }
    ]
  })
  AOS.init();

  $('#ryan_navbar-title, .navbar-brand-ryan').addClass('animated fadeInRight')

  var mobileQuery = Modernizr.mq('(max-device-width: 568px)');
  var feed;
  var token = '3381328.1677ed0.ea4bedd40dcd46f7a687cf5c9abdae17';
  if ($('#instafeed').length > 0) {
    if (mobileQuery) {
      feed = new Instafeed({
        get: 'user',
        userId: '3381328',
        accessToken: token,
        sortBy: 'most-recent',
        limit: 30,
        resolution: 'low_resolution',
        template: '<a class="latest-image-inst-mobile" href="{{link}}" target="_blank"><img src="{{image}}" /><p class="small caption">{{caption}}</p></a>'
      });
    } else {
      feed = new Instafeed({
        get: 'user',
        userId: '3381328',
        accessToken: token,
        sortBy: 'most-recent',
        limit: 30,
        resolution: 'standard_resolution',
        template: '<a class="latest-image-inst" href="{{link}}" target="_blank"><img src="{{image}}" /><p class="small caption-big">{{caption}}</p></a>'
      });
    }
  feed.run();
  }
})
