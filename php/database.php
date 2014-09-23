<?php
$user = 'root';
$pass = '';
$db = 'zerotouch';

mysql_connect('localhost', $user, $pass) or die(mysql_error()); 
 mysql_select_db($db) or die(mysql_error()); 

// collect data from members table
$data = mysql_query("SELECT * FROM members") 
 or die(mysql_error());

//print out contents
while ($info = mysql_fetch_array($data)){
	Print "<div style = 'color: #00a8cb;'><b>".$info['name'] . "</b></div>"; 
	Print "<div style = 'color: #333;'>";
	Print "<b>Sign up Date:</b> ".$info['sign_up_date'] . " <br/>"; 
	Print "<b>Email:</b> ".$info['email'] . " <br/>";
	Print "<b>Gender:</b> ".$info['gender'] . " <br/>";
	Print "<b>Country:</b> ".$info['country'] . " <br/>";
	Print "<b>Comments:</b> ".$info['comments'] . " <br/> <br/></div>";
}

?>