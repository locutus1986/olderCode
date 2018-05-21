console.log($('a').attr('href'));


$('button').on('click', function(){
  $('a').attr('href', 'https://github.com/');
  console.log($('a').attr('href'));
});