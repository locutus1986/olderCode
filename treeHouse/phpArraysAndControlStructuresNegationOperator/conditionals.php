<?php
$firstName = "Zachary";
$lastName = "Ruffner";
$currentGrade = 12;
$finalAverage = .80;
$messageBody = "";

if(!$firstName || !$lastName){
  echo 'Please enter a student name';
}elseif ($currentGrade < 9 || $currentGrade > 12){
  echo 'This is only for high school students. Please enter a grade between 9 and 12';
}else{
  if($finalAverage < .70){
    $messageBody = 'We look forward to seeing you at summer school, beginning July 1st';
  }else{
    switch($currentGrade){
      case 9:
        $messageBody = 'Congradutaltion on completing your freshman year in High Schhol!
        We\'ll see you on September 1st for the start of your sophomore year!';
        break;
      case 10:
        $messageBody = 'Congratulations on completing your sophomore year in High School! We’ll see you on September 1st for the start of your junior year!';
        break;
      case 11:
        $messageBody = 'Congratulations on completing your junior year in High School! We’ll see you on September 1st for the start of your senior year!';
      break;
      
      case 12:
      $messageBody = 'Congratulations! You’ve graduated High School! Don’t forget to come back and visit.';
      break;
      
      default:
        $messageBody = 'wrong grade';
    }
  }
  echo "Dear $firstName $lastName, \n";
  echo $messageBody;
}
?>