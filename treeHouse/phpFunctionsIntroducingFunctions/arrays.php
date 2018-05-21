<?php

$myArray = array(
  'Zachary' => 'dev job',
  'Traci' => 'human resources',
  'Atticus' => 'fits',
  'Ollie' => 'another cup of milk',
);

//var_dump(array_keys($myArray));
//var_dump(array_values($myArray));

//foreach(array_keys($myArray) as $name){
//  echo $name . "\n";
//}

function print_info($value, $key){
  echo "$key wants a $value.\n";
}

array_walk($myArray, 'print_info');
?>