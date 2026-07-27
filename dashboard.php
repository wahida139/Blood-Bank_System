<?php
/*session_start();

if (!isset($_SESSION["email"])) {
    header("Location: login.php");
    exit();
}

$email = $_SESSION["email"];*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>

    <link rel="stylesheet" href="css/style.css">

    <style>
        .dashboard{
            max-width:900px;
            margin:60px auto;
            background:#fff;
            padding:40px;
            border-radius:12px;
            box-shadow:0 10px 30px rgba(0,0,0,.1);
            text-align:center;
        }

        .dashboard h1{
            color:#c1121f;
            margin-bottom:15px;
        }

        .dashboard p{
            font-size:18px;
            margin-bottom:25px;
        }

        .dashboard a{
            display:inline-block;
            background:#c1121f;
            color:#fff;
            padding:12px 25px;
            border-radius:6px;
            text-decoration:none;
            font-weight:bold;
        }

        .dashboard a:hover{
            background:#9d0208;
        }
    </style>
</head>

<body>

<div class="dashboard">

    <h1>Blood Bank Management System</h1>

    <h2>Dashboard</h2>

    <p>Welcome,
    <strong>Welcome to Blood Bank Dashboard</strong>
    </p>

    <p>You have successfully logged in.</p>

    <a href="logout.php">Logout</a>

</div>

</body>
</html>