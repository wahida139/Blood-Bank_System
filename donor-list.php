<?php
session_start();
error_reporting(E_ALL);
include('includes/config.php');

// Security Check
if(strlen($_SESSION['alogin'])==0) {	
    header('location:login.php');
    exit();
}

// Handle Delete Operation
if(isset($_REQUEST['del'])) {
    $delid = intval($_GET['del']);
    
    // Using PDO prepared statements for security (Week 5)
    $sql = "DELETE FROM tblblooddonars WHERE id=:delid";
    $query = $dbh->prepare($sql);
    $query->bindParam(':delid', $delid, PDO::PARAM_INT);
    $query->execute();
    $msg = "Donor Record deleted successfully";
}

?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	<title>BBDMS | Donor List</title>
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
        </ul>
    </nav>
    <div class="content-wrapper" style="margin-left: 250px; padding: 20px;">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="page-title">Manage Donors</h2>

                    <!-- Zero Configuration Table -->
                    <div class="panel panel-default">
                        <div class="panel-heading">Registered Donors Details</div>
                        <div class="panel-body">
                        <?php if(isset($msg)) { ?>
                            <div class="alert alert-success"><strong>SUCCESS:</strong> <?php echo htmlentities($msg); ?></div>
                        <?php } ?>
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Full Name</th>
                                        <th>Mobile No</th>
                                        <th>Email</th>
                                        <th>Blood Group</th>
                                        <th>Location</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
<?php 
// Read Operation
$sql = "SELECT * from tblblooddonars";
$query = $dbh->prepare($sql);
$query->execute();
$results = $query->fetchAll(PDO::FETCH_OBJ);
$cnt = 1;
if($query->rowCount() > 0) {
    foreach($results as $result) { ?>	
                                    <tr>
                                        <td><?php echo htmlentities($cnt);?></td>
                                        <td><?php echo htmlentities($result->FullName ?? 'N/A');?></td>
                                        <td><?php echo htmlentities($result->MobileNumber ?? 'N/A');?></td>
                                        <td><?php echo htmlentities($result->EmailId);?></td>
                                        <td><?php echo htmlentities($result->BloodGroup ?? 'N/A');?></td>
                                        <td><?php echo htmlentities($result->Location ?? 'N/A');?></td>
                                        <td>
                                            <!-- Delete Operation -->
                                            <a href="donor-list.php?del=<?php echo htmlentities($result->id);?>" onclick="return confirm('Do you really want to delete this record?');" class="btn btn-danger btn-sm">
                                                <i class="fa fa-trash"></i> Delete
                                            </a>
                                        </td>
                                    </tr>
<?php $cnt++; }} ?>
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
