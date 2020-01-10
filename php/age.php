<html>
 <head>
  <title>Age et plus</title>
 </head>
 <body>


<?php 
 
header("Content-type: text/javascript"); 
 
echo 'var softwares = {
    "Adobe": [
        "Acrobat",
        "Dreamweaver",
        "Photoshop",
        "Flash"
    ],
    "Mozilla": [
        "Firefox",
        "Thunderbird",
        "Lightning"
    ],
    "Microsoft": [
        "Office",
        "Visual C# Express",
        "Azure"
    ] 
};';

?>
 
receiveMessage(softwares);


</body>
</html>