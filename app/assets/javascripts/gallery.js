$(document).ready(function() {
  $('.picture').each( function() {
    var image = $(this);
    var getItems = function() {
      var items = [];
      image.find('img').each(function() {
          var href   = $(this).attr('src');
          var item = {
              src : href,
              w   : 800,
              h   : 800
          }
          items.push(item);
      });
      return items;
    }

    var items = getItems();
    var photoswipe = $('.pswp')[0];

    image.on('click', '.gallery-image', function(event) {
        event.preventDefault();

        var $index = $(this).index();
        var options = {
            index: $index,
            bgOpacity: 0.7,
            showHideOpacity: true
        }
        // Initialize PhotoSwipe
        var lightBox = new PhotoSwipe(photoswipe, PhotoSwipeUI_Default, items, options);
        lightBox.init();
    });
  });

})
