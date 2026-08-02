<?php
session_start();
error_reporting(E_ALL);
include('includes/config.php');

// Security Check
if(strlen($_SESSION['alogin'])==0) {	
    header('location:login.php');
    exit();
}

?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	<title>BBDMS | Blood Requests (JOIN Query)</title>
	<!-- Font awesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<!-- Sandstone Bootstrap CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/sandstone/bootstrap.min.css">
	<!-- Admin Stye -->
	<link rel="stylesheet" href="css/style.css">
</head>

<body>
<div class="brand clearfix" style="background: #e53935; padding: 10px 20px; color: white;">
    <a href="dashboard.php" style="font-size: 20px; color: white; text-decoration: none;">Blood Bank & Donor Management System</a>
    <span class="menu-btn"><i class="fa fa-bars"></i></span>
    <ul class="ts-profile-nav" style="float: right; list-style: none;">
        <li><a href="logout.php" style="color: white; text-decoration: none;"><i class="fa fa-sign-out"></i> Logout</a></li>
    </ul>
</div>

<div class="ts-main-content">
    <nav class="ts-sidebar" style="width: 250px; float: left; background: #2c3136; min-height: 100vh; padding-top: 20px;">
        <ul class="ts-sidebar-menu" style="list-style: none; padding: 0;">
            <li class="ts-label" style="color: #8c909a; padding: 10px 20px; font-weight: bold; text-transform: uppercase;">Main</li>
            <li><a href="dashboard.php" style="color: #fff; padding: 10px 20px; display: block;"><i class="fa fa-dashboard"></i> Dashboard</a></li>
            <li><a href="donor-list.php" style="color: #fff; padding: 10px 20px; display: block;"><i class="fa fa-users"></i> Donor List</a></li>
            <li><a href="requests-received.php" style="color: #fff; padding: 10px 20px; display: block;"><i class="fa fa-bell"></i> Blood Requests</a></li>
        </ul>
    </nav>
    <div class="content-wrapper" style="margin-left: 250px; padding: 20px;">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="page-title">Total Blood Requests Received</h2>

                    <!-- Relational JOIN Query Table -->
                    <div class="panel panel-danger">
                        <div class="panel-heading">Appointment Requests (INNER JOIN tblblooddonars)</div>
                        <div class="panel-body">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Appointment ID</th>
                                        <th>Donor Name</th>
                                        <th>Donor Email</th>
                                        <th>Blood Group</th>
                                        <th>Appointment Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
<?php 
// Week 5 Relational JOIN Query Demonstration
$sql = "SELECT 
            a.appointment_id, 
            d.FullName AS donor_name, 
            d.EmailId AS donor_email, 
            d.BloodGroup AS blood_group,
            a.appointment_time, 
            a.status 
        FROM tblappointments a
        INNER JOIN tblblooddonars d ON a.donor_id = d.id
        ORDER BY a.appointment_time ASC";

$query = $dbh->prepare($sql);
$query->execute();
$results = $query->fetchAll(PDO::FETCH_OBJ);

if($query->rowCount() > 0) {
    foreach($results as $result) { ?>	
                                    <tr>
                                        <td>#<?php echo htmlentities($result->appointment_id);?></td>
                                        <td><?php echo htmlentities($result->donor_name ?? 'Unknown');?></td>
                                        <td><?php echo htmlentities($result->donor_email);?></td>
                                        <td><span class="label label-primary"><?php echo htmlentities($result->blood_group ?? 'N/A');?></span></td>
                                        <td><?php echo htmlentities($result->appointment_time);?></td>
                                        <td>
                                            <?php if($result->status == 'Scheduled') { ?>
                                                <span class="label label-warning">Scheduled</span>
                                            <?php } else if($result->status == 'Completed') { ?>
                                                <span class="label label-success">Completed</span>
                                            <?php } else { ?>
                                                <span class="label label-danger">Cancelled</span>
                                            <?php } ?>
                                        </td>
                                    </tr>
<?php }} else { ?>
                                    <tr>
                                        <td colspan="6" class="text-center">No blood requests received yet.</td>
                                    </tr>
<?php } ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
