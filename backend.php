<?php
// Function to handle form submission
function processFormData() {
  // Retrieve form inputs
  $itemName = $_POST['itemName'];
  $purchaseDate = $_POST['purchaseDate'];
  $warrantyDuration = $_POST['warrantyDuration'];
  $maintenanceRecord = $_POST['maintenanceRecord'];

  // Perform data validation
  $isValid = true;
  $errors = array();

  if (empty($itemName)) {
    $isValid = false;
    $errors[] = "Item name is required";
  }

  if (empty($purchaseDate)) {
    $isValid = false;
    $errors[] = "Purchase date is required";
  }

  if (empty($warrantyDuration) || !is_numeric($warrantyDuration) || $warrantyDuration <= 0) {
    $isValid = false;
    $errors[] = "Warranty duration should be a positive number";
  }

  if (empty($maintenanceRecord)) {
    $isValid = false;
    $errors[] = "Maintenance record is required";
  }

  // Process form data if valid
  if ($isValid) {
    // Add code to process and store the form data (e.g., save to database)

    // For example, let's just print the form data for demonstration purposes
    echo "Item Name: " . $itemName . "<br>";
    echo "Purchase Date: " . $purchaseDate . "<br>";
    echo "Warranty Duration: " . $warrantyDuration . "<br>";
    echo "Maintenance Record: " . $maintenanceRecord . "<br>";
  } else {
    // Display errors
    foreach ($errors as $error) {
      echo $error . "<br>";
    }
  }
}

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Process form data
  processFormData();
}
?>
