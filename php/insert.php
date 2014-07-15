<?php

function insert($name, $email, $comment, $gender, $country){ //function parameters, two variables.
	$user = 'root';
	$pass = '';
	$db = 'zerotouch';

	$con = mysqli_connect('localhost', $user, $pass, $db);

	if (mysqli_connect_errno()) {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	// escape variables for security
	$name = mysqli_real_escape_string($con, $name);
	$email = mysqli_real_escape_string($con, $email);
	$comment = mysqli_real_escape_string($con, $comment);
	$gender = mysqli_real_escape_string($con, $gender);
	$country = mysqli_real_escape_string($con, $country);

	$sql="INSERT INTO members (name, email, comments, gender, country, sign_up_date)
	VALUES ('$name', '$email', '$comment', '$gender', '$country', CURRENT_TIMESTAMP)";

	if (!mysqli_query($con,$sql)) {
	  die('Error: ' . mysqli_error($con));
	}else{
		echo "<script type='text/javascript'>alert('Data saved');</script>";
	}

	mysqli_close($con);
	return;
}

?>