<?php
require_once('includes/config.php');

header('Content-Type: application/json');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
    exit;
}

// Read raw POST data (from fetch API JSON payload)
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE); //convert JSON into array

if (!$input) {
    $input = $_POST;
}

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$bloodGroup = trim($input['bloodGroup'] ?? '');
$location = trim($input['location'] ?? '');
$password = $input['password'] ?? '';

if (empty($name) || empty($email) || empty($password)) {
    echo json_encode(['status' => 'error', 'message' => 'Missing fields']);
    exit;
}

if (!preg_match('/^[A-Za-z0-9._%+-]+@gmail\.com$/', $email)) {
    echo json_encode(['status' => 'error', 'message' => 'Please enter a valid Gmail address ending with @gmail.com.']);
    exit;
}

// Hash password
$password_hash = password_hash($password, PASSWORD_DEFAULT);

try {
    $sql = "INSERT INTO tblblooddonars (FullName, EmailId, MobileNumber, BloodGroup, Location, Password) VALUES (:name, :email, :phone, :bloodGroup, :location, :hash)";
    $query = $dbh->prepare($sql);
    $query->bindParam(':name', $name, PDO::PARAM_STR);
    $query->bindParam(':email', $email, PDO::PARAM_STR);
    $query->bindParam(':phone', $phone, PDO::PARAM_STR);
    $query->bindParam(':bloodGroup', $bloodGroup, PDO::PARAM_STR);
    $query->bindParam(':location', $location, PDO::PARAM_STR);
    $query->bindParam(':hash', $password_hash, PDO::PARAM_STR);
    
    if($query->execute()) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to save to database']);
    }
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
