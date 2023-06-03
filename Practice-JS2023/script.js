// Function to handle form submission
function submitForm(event) {
        event.preventDefault(); // Prevent form from submitting
        
        // Clear previous error messages
        clearErrorMessages();
        
        // Retrieve form inputs
        var itemName = document.getElementById('itemName').value;
        var purchaseDate = document.getElementById('purchaseDate').value;
        var warrantyDuration = document.getElementById('warrantyDuration').value;
        var maintenanceRecord = document.getElementById('maintenanceRecord').value;
        
        // Perform data validation
        var isValid = true;
        
        if (itemName.trim() === '') {
          showError('itemNameError', 'Item name is required');
          isValid = false;
        }
        
        if (purchaseDate === '') {
          showError('purchaseDateError', 'Purchase date is required');
          isValid = false;
        }
        
        if (warrantyDuration.trim() === '') {
          showError('warrantyDurationError', 'Warranty duration is required');
          isValid = false;
        } else if (isNaN(warrantyDuration) || parseInt(warrantyDuration) <= 0) {
          showError('warrantyDurationError', 'Warranty duration should be a positive number');
          isValid = false;
        }
        
        if (maintenanceRecord.trim() === '') {
          showError('maintenanceRecordError', 'Maintenance record is required');
          isValid = false;
        }
        
        // If all data is valid, proceed with further actions (e.g., saving data)
        if (isValid) {
         
        }
      }
      
      // Function to clear error messages
      function clearErrorMessages() {
        var errorMessages = document.getElementsByClassName('error-message');
        for (var i = 0; i < errorMessages.length; i++) {
          errorMessages[i].textContent = '';
        }
      }
      
      // Function to show error messages
      function showError(elementId, message) {
        var errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
      }
      
      // Attach form submit event listener
      var itemForm = document.getElementById('itemForm');
      itemForm.addEventListener('submit', submitForm);
      