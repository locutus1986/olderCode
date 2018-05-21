<?php
$my_array = array('conditionals', 'arrays', 'loops');
$my_array[] = 'build something';

array_push($my_array, 'functions', 'forms', 'objects');
array_unshift($my_array, 'html', 'css');


//echo 'you removed ' . array_shift($my_array) . "\n";
//echo 'you popped ' . array_pop($my_array) . "\n";
//unset($my_array[3], $my_array[5]);

//$my_array = array_values($my_array);

$my_array[0] = 'email';
shuffle($my_array);
var_dump($my_array);

?>