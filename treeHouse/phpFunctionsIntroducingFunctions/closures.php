<?php
//Anonymous functions that can access var outside of function scope.

//Example

$name = "Muad'dib";

$greet = function() use($name){
  echo "hello there, $name.";
//must close function with ;
};  

$greet();
?>