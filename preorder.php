<!--===============================
Author: Eduardo López Arce Vivas
email: eduardo.lopezarce@gmail.com
================================-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--========START HTML========--> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
    <!--========START HEAD========-->   
    <head>
        <!--========START META========-->
        <meta name = "description" content="Spadia Engineering develops low cost myoelectric prostheses to help physically challenged individuals to adapt to their environment.">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />   
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <!--=========FAVICON=============--> 
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
        <!--========START TITLE========-->    
        <title>
            Spadia Engineering  | Pre-order
        </title>
        <!--========LINK TO CSS STYLESHEET========-->
        <link rel="stylesheet" href="css/style.css">
        <!--==========LINK TO GOOGLE FONTS==============-->
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
        <!--========CALL JQUERY, JQUERY UI AND JQUERY FILES========-->  
        <script type ="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <script type = "text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
    </head>
    <!--========START BODY========-->
    <body> 
        <!--========LOADING IMAGE========-->
        <div style="display: none" id="hideAll">
            <img id = "imgLoad" src="images/logo.png"><br/><br/>
            <img id = "loader"  src = "images/ajax-loader.gif">
        </div>
        <script>
            document.getElementById("hideAll").style.display = "block";
            var windowHeight = $(window).height();
            var imgHeight = $("#imgLoad").height();
            $("#hideAll").css("padding-top",Math.round(windowHeight/2)-Math.round(imgHeight/2));
        </script><!--END LOADING IMAGE-->

        <!--========LOGO, TOP MENU AND FLAGS========-->
        <table id = "tabmenu" align="center"><tr>
          <!--========LOGO========-->
          <td width="15%"><div class="logo">
            <a href="index.html"><img src="images/logo.png" title="Home" alt="Home" ></a>
          </div></td><!--END LOGO-->
          <!--========TOP MENU========-->
          <td width ="65%" valign="center"><ul id ="navmenu">
            <li><a href="awards.html">Awards & Publications</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul></td><!--END TOP MENU-->
            <!--=======PRE-ORDER BUTTON=====-->
            <td width ="15%" valign="center"><ul>
                <li><a class = "preorder" href = "preorder.php">Pre-order now!</a>
            </ul></td><!--END PRE-ORDER BUTTON-->
        </tr></table><!--END LOGO AND TOP MENU-->

        <!--============MAIN CONTENT===============-->
        <div id ="paddingMenu"></div>

        <div class = "mainContainer" id ="mainContainer1">
            <img class="backgd" src = "images/contact2.JPG"/>
        </div>  
        <?php
            // define variables and set to empty values
            $nameErr = $emailErr = $genderErr = $countryErr = "";
            $name = $email = $gender = $comment = $country = "";
            $dataErr = 1;

            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $dataErr = 0;
                if (empty($_POST["name"])) {
                    $nameErr = "Name is required";
                    $dataErr = 1;
                } else {
                    $name = test_input($_POST["name"]);
                    // check if name only contains letters and whitespace
                    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
                        $nameErr = "Only letters and white space allowed"; 
                        $dataErr = 1;
                    }
               }
               
                if (empty($_POST["email"])) {
                    $emailErr = "Email is required";
                    $dataErr = 1;
                } else {
                    $email = test_input($_POST["email"]);
                    // check if e-mail address syntax is valid
                    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
                        $emailErr = "Invalid email format";
                        $dataErr = 1;
                    }
                }

                if (empty($_POST["comment"])) {
                    $comment = "";
                } else {
                    $comment = test_input($_POST["comment"]);
                }

                if (empty($_POST["gender"])) {
                    $genderErr = "Gender is required";
                    $dataErr = 1;
                } else {
                    $gender = test_input($_POST["gender"]);
                }

                if (empty($_POST["country"])) {
                    $countryErr = "Country is required";
                    $dataErr = 1;
                } else {
                    $country = test_input($_POST["country"]);
                }
            }

            function test_input($data) {
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
            }
        ?>
        <div class = "mainContainer">
            <div id ="contactText">
                <div class = "p1">Your details</div><br>
                <div class= "p2" style = "color: red;">* required field.</div><br>

                <form method = "post" action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
                    <div class = "p2">Name:</div> <input type="text" name="name" style = "float: left;" value="<?php echo $name;?>">
                    <div class = "p2" style = "color: red;">* <?php echo $nameErr;?></div>
                    <br>
                    <div class = "p2">E-mail: </div><input type="text" name="email" style = "float: left;" value="<?php echo $email;?>">
                    <div class = "p2" style = "color: red;">* <?php echo $emailErr;?></div>
                    <br>
                    <div class = "p2">Gender: <br>
                    <input type="radio" name="gender" <?php if (isset($gender) && $gender=="female") echo "checked";?>  value="female">Female
                    <input type="radio" name="gender" <?php if (isset($gender) && $gender=="male") echo "checked";?>  value="male">Male
                    <span class="p2" style = "color: red;">* <?php echo $genderErr;?></span></div>
                    <br>
                    <div class = "p2">Country: </div>
                    <div style = "float: left;">
                        <select name = "country">
                            <option value>-----------------</option>
                                <?php include 'countries.php';
                                    foreach($countryList as $key => $value):
                                    echo '<option value="'.$key.'">'.$value.'</option>'; //close your tags!!
                                    endforeach;
                                ?>
                        </select>
                        <span class="p2" style = "color: red;">* <?php echo $countryErr;?></span>
                    </div><br>
                    <br>
                    <div class = "p2">Comments: </div><textarea style = "vertical-align: top;"name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
                    <br/><br><br><br><br>
                    <div class = "p2" style = "text-align: left; float: left;"><input type="submit" name="submit" value="Submit"> </div>
                </form>
            </div>
        </div>




<?php
    if ($dataErr == 0){
        $connect = 0;
        include 'php/connect.php';
        if ($connect == 1){
            include 'php/insert.php';
            insert($name, $email, $comment, $gender, $country);     
        }else{
            echo "<script type='text/javascript'>alert('Did not connect with database');</script>";
        }
    }
?>
        <!--============SUBFOOTER===========-->
        <div class = "subfooter" width ="100%">
              <p>
                <a class="facebook"  href="https://www.facebook.com/spadia.engineering" alt="Facebook" title="Facebook">
                  <img src="images/facebook.png"/>
                  <img src="images/facebook2.png" id ="facebook"/>
                </a>
                <a class="youtube" href="http://www.youtube.com/channel/UCso-N4HSArLndG_XXOiJcKg" alt="Youtube" title="Youtube">
                  <img src="images/youtube.png"/>
                  <img src="images/youtube2.png" id ="youtube"/>
                </a>
                <a class="linkedin" href="https://www.linkedin.com/company/spadia-engineering" alt="LinkedIn" title="LinkedIn">
                  <img src="images/linkedin.png"/>
                  <img src="images/linkedin2.png" id ="linkedin"/>
                </a>
                <a class="twitter" href="https://twitter.com/spadiaLTD" alt="Twitter" title="Twitter">
                  <img src="images/twitter.png"/>
                  <img src="images/twitter2.png" id ="twitter"/>
                </a>
              </p>
          Spadia Engineering Ltd., United Kingdom. 2014.
        </div>
        <script src="js/functions.js"></script>

    </body>
</html>