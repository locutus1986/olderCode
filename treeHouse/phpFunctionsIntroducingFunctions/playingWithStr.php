<?php
$myStr = 'So say we all! Fraking cylons';

echo strlen($myStr) . "\n"; 

echo substr($myStr, 15, 4) . "\n";

echo strpos($myStr, '! ') . "\n";

//if(strpos($myStr, '! ') == false){
//  echo 'not in there bud';
//}

$cylon = strpos($myStr, 'c');
echo substr($myStr, $cylon) . "\n";
?>