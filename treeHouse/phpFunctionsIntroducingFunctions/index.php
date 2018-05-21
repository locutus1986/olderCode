<?php
//function hello($arr){
//  if(is_array($arr)){
//    foreach($arr as $name){
//        echo "hello $name, <br>";
//    }
//  }else{
//    echo "Hello, friends!";
//  }
//}
//$names = array(
//  "Jean Luc Picard",
//  "Bob Dylan",
//  "Admiral William Adama",
//);
//hello($names);

//$current_user = "Zachary";
//
//function is_Zachary(){
//  global $current_user;
//  if($current_user == 'Zachary'){
//    echo "It is Zachary.";
//  }else{
//    echo "No, it's not me";
//  }
//}
//
//is_Zachary();

function get_info($name = 'Our frined', $title = null){
  if($title){
    return "$name has arrived, they are with us as a $title";
  }else{
    return "$name has arrived, welcome!";
  }
}

$here = get_info('Zachary', 'awesome guy');
echo $here;
?>