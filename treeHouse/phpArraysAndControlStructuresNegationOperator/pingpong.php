<?php
$player1 = 0;
$player2 = 0;
$round = 0;

//Win
//player must reach a score of 11
// and must be a min of 2 points higher than opponent



while(abs($player1 - $player2) < 2 || ($player1 < 11 && $player2 < 11)){
//Not winner
//randomly increment one of the players scores each round
  $round++;
  echo "<h2>Round $round</h2>\n";
  if(rand(0,1)){
    $player1++;
  }else{
    $player2++;
  }
  echo "Player1 = $player1 <br> \n";
  echo "Player2 = $player2 <br> \n";
}
echo "<h1>";
if($player1 > $player2){
  echo "player1";
}else{
  "player2";
}
echo " is the winner! after $round rounds";

?>