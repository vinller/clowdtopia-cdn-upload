<?php
// Check if a file was uploaded
if (isset($_FILES["fileToUpload"])) {
    $targetDir = "uploads/"; // Directory where the file will be saved
    $targetFile = $targetDir . basename($_FILES["fileToUpload"]["name"]);

    // Check if the file already exists
    if (file_exists($targetFile)) {
        echo "File already exists.";
    } else {
        // Move the uploaded file to the specified directory
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $targetFile)) {
            echo "File uploaded successfully.";
        } else {
            echo "Error uploading the file.";
        }
    }
} else {
    echo "No file selected.";
}
?>
