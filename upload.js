// Get references to the form and the status div
const uploadForm = document.getElementById("uploadForm");
const statusDiv = document.getElementById("status");

uploadForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get the file input element
  const fileInput = document.getElementById("fileToUpload");
  const file = fileInput.files[0];

  if (file) {
    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append("fileToUpload", file);

    // Send the file using a POST request to the server
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "upload.php", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        statusDiv.innerHTML = "File uploaded successfully!";
      }
    };
    xhr.send(formData);
  } else {
    statusDiv.innerHTML = "Please select a file to upload.";
  }
});
