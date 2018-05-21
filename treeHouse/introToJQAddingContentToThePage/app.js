$('.loc').hover(
  function(){
    $(this).html("<strong>Location:</strong> Your house?!");
  },
  function() {
    $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
});

//Grab info from the form
$('#add-pet').on('click', function(){
const $name = $('pet-name');
const $species = $('pet-species');
const $notes = $('pet-note');

//Assemble the HTML of our new element witht he above varibales
var $newPet = $(
  '<section class="six colums"><div class="card"><p><strong>Name:</strong> ' + $name.val() +  
  '</p><p><strong>Species:</strong>' + $species.val() +
  '</p><p><strong>Notes:</strong>' + $notes.val()+
  '</p><span class="close">&tiems;</span></div></sections>'
);

//Attach the new element to the page
$('#posted-pets').append($newPet);
  });