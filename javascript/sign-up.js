// Toggles visual validation for normal form inputs depending on whether they are full or empty
const checkFull = function(event) {
    const classFull = "form-input-full";
    const elementFull = this.value != "" && this.value != null;  // Checks if element contains any values
    const elementClassExists = this.classList.contains(classFull);  // Check if element has full element class

    // If element is contains values but is missing element full class, add it
    if (elementFull && !elementClassExists) {
        this.classList.add(classFull);
    // If element is empty but includes element full class, remove it
    } else if (!elementFull && elementClassExists) {
        this.classList.remove(classFull);
    }
}

// Checks to see if password fields match and mocks visual validation
const checkPass = function(event) {
    const validClass = "pass-valid";
    const invalidClass = "pass-invalid";
    const validClassExists = this.classList.contains(validClass);  // Check if element has valid password class
    const invalidClassExists = this.classList.contains(invalidClass);  // Check if element has invalid password class
    const passwordsMatch = this.value == userPassword.value;  // Check if passwords fields match

    // Toggle valid/invalid classes from element depending on whether passwords match
    if (passwordsMatch) {
        // Ensure duplicate classes aren't added to element
        if (!validClassExists) {
            this.classList.add(validClass);
        }
        if (invalidClassExists) {
            this.classList.remove(invalidClass)
        }
    } else if (!passwordsMatch) {
        if (!invalidClassExists) {
            this.classList.add(invalidClass);
        }
        if (validClassExists) {
            this.classList.remove(validClass)
        }
    }
        
    console.log(this.value);
}

// Get elements
const regularFields = document.querySelectorAll(".regular-field");
const confirmField = document.querySelector(".confirm-field");
const userPassword = document.querySelector("#user-password");

// Add event listeners
regularFields.forEach(el => el.addEventListener("keyup", checkFull));
confirmField.addEventListener("keyup", checkPass);