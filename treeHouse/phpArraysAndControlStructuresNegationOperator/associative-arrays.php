<?php
$cream = array('Zachary' => 'Mint-chocolate-chip', 
               'Ollie' => 'vinnila', 
               'Atticus' => 'chocolate', 
               'Mom' => 'strawberry');
               
$cream['zachary'] = 'something else';
$cream['Mom'] = 'needs something else';

krsort($cream);

var_dump($cream);

echo $cream['Zachary'] . "\n";

?>