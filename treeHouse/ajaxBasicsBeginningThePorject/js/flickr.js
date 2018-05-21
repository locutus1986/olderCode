$(document).ready(function(){
  $('button').click(function(){
    $('button').removeClass('selected');
    $(this).addClass("selected");
    var flickerAPI = 'http://apt.flicker.com/services/feeds/photos_public.gne?jsoncallback=?';
    var animal = $(this).text();
    var flickrOptions = {
      tags : animal,
      foramt : "json"
    };
    function displayPhotos(data)  {
      var photHTML = '<ul>';
      $.each(data.items, function(i, photo){
        photoHTML +='<li class="grid-25 tablet-grid-50">';
        pothoHTml +='<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '" ></a></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  });
});//END READY 