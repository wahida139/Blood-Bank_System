<?php
session_start();
error_reporting(0);
include('includes/config.php');

$timeout_duration = 300;
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > $timeout_duration)) {
    session_unset();
    session_destroy();
    header("Location: login.php?msg=Session timed out due to inactivity");
    exit();
}
$_SESSION['last_activity'] = time();

if(strlen($_SESSION['alogin'])==0)
	{	
header('location:login.php');
}
else{
	?>
<!doctype html>
<html lang="en" class="no-js">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="theme-color" content="#3e454c">
	
	<title>BBDMS | Admin Dashboard</title>

	<!-- Font awesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/font-awesome/4.7.0/css/font-awesome.min.css">
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

						<h2 class="page-title">Dashboard</h2>
						
						<div class="row">
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-4">
										<div class="panel panel-default">
											<div class="panel-body bk-primary text-light">
												<div class="stat-panel text-center">
<?php 
try {
	$sql ="SELECT DISTINCT BloodGroup from tblblooddonars WHERE BloodGroup IS NOT NULL";
	$query = $dbh -> prepare($sql);
	$query->execute();
	$bg=$query->rowCount();
} catch (Exception $e) { $bg = 0; }
?>
													<div class="stat-panel-number h1 "><?php echo htmlentities($bg);?></div>
													<div class="stat-panel-title text-uppercase">Listed Blood Groups</div>
												</div>
											</div>
											<a href="manage-bloodgroup.php" class="block-anchor panel-footer">Full Detail <i class="fa fa-arrow-right"></i></a>
										</div>
									</div>
									<div class="col-md-4">
										<div class="panel panel-default">
											<div class="panel-body bk-success text-light">
												<div class="stat-panel text-center">
												<?php 
try {
	$sql1 ="SELECT id from tblblooddonars ";
	$query1 = $dbh -> prepare($sql1);
	$query1->execute();
	$regbd=$query1->rowCount();
} catch (Exception $e) { $regbd = 0; }
?>
													<div class="stat-panel-number h1 "><?php echo htmlentities($regbd);?></div>
													<div class="stat-panel-title text-uppercase">Registered Donors</div>
												</div>
											</div>
											<a href="donor-list.php" class="block-anchor panel-footer text-center">Full Detail &nbsp; <i class="fa fa-arrow-right"></i></a>
										</div>
									</div>
									<!-- <div class="col-md-4">
										<div class="panel panel-default">
											<div class="panel-body bk-info text-light">
												<div class="stat-panel text-center">
												<?php 
try {
	$sql6 ="SELECT record_id from tblbloodrecords ";
	$query6 = $dbh -> prepare($sql6);
	$query6->execute();
	$query_count=$query6->rowCount();
} catch (Exception $e) { $query_count = 0; }
?>
													<div class="stat-panel-number h1 "><?php echo htmlentities($query_count);?></div>
													<div class="stat-panel-title text-uppercase">Total Records</div>
												</div>
											</div>
											<a href="manage-conactusquery.php" class="block-anchor panel-footer text-center">Full Detail &nbsp; <i class="fa fa-arrow-right"></i></a>
										</div>
									</div> -->
<!------------------------>
			<div class="col-md-4">
										<div class="panel panel-danger">
											<div class="panel-body bk-info text-light">
												<div class="stat-panel text-center">
												<?php 
try {
	$sql6 ="SELECT appointment_id from tblappointments ";
	$query6 = $dbh -> prepare($sql6);
	$query6->execute();
	$totalreuqests=$query6->rowCount();
} catch (Exception $e) { $totalreuqests = 0; }
?>
													<div class="stat-panel-number h1 "><?php echo htmlentities($totalreuqests);?></div>
													<div class="stat-panel-title text-uppercase">Total Blood Request Received</div>
												</div>
											</div>
											<a href="requests-received.php" class="block-anchor panel-footer text-center">Full Detail &nbsp; <i class="fa fa-arrow-right"></i></a>
										</div>
									</div>










							
								</div>
							</div>
						</div>
					</div>
				</div>












			</div>
		</div>
	</div>

	<!-- Loading Scripts -->
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap-select.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.dataTables.min.js"></script>
	<script src="js/dataTables.bootstrap.min.js"></script>
	<script src="js/Chart.min.js"></script>
	<script src="js/fileinput.js"></script>
	<script src="js/chartData.js"></script>
	<script src="js/main.js"></script>
	
	<script>
		
	window.onload = function(){
    
		// Line chart from swirlData for dashReport
		var ctx = document.getElementById("dashReport").getContext("2d");
		window.myLine = new Chart(ctx).Line(swirlData, {
			responsive: true,
			scaleShowVerticalLines: false,
			scaleBeginAtZero : true,
			multiTooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
		}); 
		
		// Pie Chart from doughutData
		var doctx = document.getElementById("chart-area3").getContext("2d");
		window.myDoughnut = new Chart(doctx).Pie(doughnutData, {responsive : true});

		// Dougnut Chart from doughnutData
		var doctx = document.getElementById("chart-area4").getContext("2d");
		window.myDoughnut = new Chart(doctx).Doughnut(doughnutData, {responsive : true});

	}
	</script>
</body>
</html>
<?php } ?>
