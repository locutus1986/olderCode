<?php
//$currentYear = date('Y');
//$year = $currentYear - 100;  

//for($year = date('Y') - 99; $year <= date('Y'); $year++){
//  echo $year . "<br> \n"; 
//}

/*
while(++$year <= $currentYear){
  echo $year . "\n"; 
}

*/

$my_array = array('conditionals', 'arrays', 'loops');
$my_array[] = 'build something';

array_push($my_array, 'functions', 'forms', 'objects');
array_unshift($my_array, 'html', 'css');
asort($my_array);

for($i=0; $i < count($my_array); $i++){
  echo $my_array[$i] . "<br>\n";
}

//$count = 0;
//while((list($key, $val) = each($my_array)) && $count++ < 2){
//  echo "$key => $val\n";
//}


?>