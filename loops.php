<?php
$sTrips = '[{"from":"Alabama", "to": "Lousiana", "stops": [
    {"name": "stop1", "duration": 100},
    {"name": "stop2", "duration": 200}
]}]';
$jData = json_decode($sTrips);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loops in Loops</title>
</head>
<body>
<?php
//loop trips
    foreach($jData as $jTrip) {
        echo "<div>From: $jTrip->from </div>";
        echo "<div>To: $jTrip->to </div>";
        //loop stops
        foreach($jTrip -> stops as $jStop){
            echo "<div>stop name: $jStop->name </div>";
            echo "<div>stop duration: $jStop->duration </div>";
        }
    }
?>
    </body>
</html>