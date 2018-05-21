<?php
function answer(){
  return 42;
}

function add_up($a, $b){
  return $a + $b;
}

$func = 'add_up';
echo $func(5, 13);

//$value = add_up(2, 4);
//
//echo $value[2];
?>