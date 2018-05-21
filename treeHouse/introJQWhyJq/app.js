// Plain JavaScript
var mylist = document.getElementsByTagName('li');

for (let i = 0; i < mylist.length; i += 1) {
  mylist[i].addEventListener('click', function() {
    this.textContent = 'Clicked!';
  }); 
}

// jQuery Example
//$('li').on('click', function() {
//  $(this).text("Clicked!");
//});