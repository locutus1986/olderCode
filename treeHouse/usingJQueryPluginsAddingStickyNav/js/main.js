$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('.header').sticky({
  getWidthFrom: '.container', 
  responsiveWidth: true
});

$('.header').on('sticky-start', function () {
  $('.description').html('We build <strong>great</strong> apps');
});

$('.header').on('sticky-end', function () {
  $('.description').html('We build apps');
});

//TODO:
  //sticky of "whant us to work on your project" txt
$('.work').sticky({
  //set top spacing value
  topSpacing: 60,
  getWidthFrom: '.container', 
  responsiveWidth: true
});
  //add email link to txt
$('.work').on('sticky-start', function () {
  $(this).append(' <a href="milto:email@website.com" class="email-text">Email&nbsp;us</a>');
});

  //remove when unstuck
$('.work').on('sticky-end', function () {
  $('.email-text').remove();
});

