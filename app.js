// ==========================================
// DOM SELECTION
// ==========================================

const donorForm = document.getElementById("donorForm");

const donorName = document.getElementById("name");

const donorEmail = document.getElementById("email");

const donorPhone = document.getElementById("phone");

const bloodGroup = document.getElementById("bloodGroup");

const donorLocation = document.getElementById("location");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

const emailMessage = document.getElementById("emailMessage");

const phoneError = document.getElementById("phoneError");

const passwordMessage = document.getElementById("passwordMessage");

const confirmMessage = document.getElementById("confirmMessage");

// ==========================================
// HELPER FUNCTIONS
// ==========================================

function showError(message){

    alert(message);

}

function showSuccess(message){

    alert(message);

}

// ==========================================
// EMAIL VALIDATION
// ==========================================

donorEmail.addEventListener("input", function(){

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailPattern.test(donorEmail.value)){

        emailMessage.textContent =
        "✓ Valid Email Address";

        emailMessage.className =
        "text-green-600 text-sm mt-2";

    }

    else{

        emailMessage.textContent =
        "✗ Invalid Email Address";

        emailMessage.className =
        "text-red-600 text-sm mt-2";

    }

});

// ==========================================
// PHONE VALIDATION
// ==========================================

donorPhone.addEventListener("input", function(){

    const phonePattern =
    /^01[3-9]\d{8}$/;

    if(phonePattern.test(donorPhone.value)){

        phoneError.textContent =
        "";

    }

    else{

        phoneError.textContent =
        "Enter a valid Bangladeshi phone number.";

    }

});

// ==========================================
// STRONG PASSWORD VALIDATION
// ==========================================

password.addEventListener("input", function(){

    const value = password.value;

    const hasUppercase =
    /[A-Z]/.test(value);

    const hasLowercase =
    /[a-z]/.test(value);

    const hasNumber =
    /[0-9]/.test(value);

    const hasSpecial =
    /[@$!%*?&#]/.test(value);

    if(

        value.length >= 8 &&

        hasUppercase &&

        hasLowercase &&

        hasNumber &&

        hasSpecial

    ){

        passwordMessage.textContent =
        "✓ Strong Password";

        passwordMessage.className =
        "text-green-600 text-sm mt-2";

    }

    else if(

        value.length >= 6 &&

        hasUppercase &&

        hasLowercase &&

        hasNumber

    ){

        passwordMessage.textContent =
        "Medium Password";

        passwordMessage.className =
        "text-yellow-600 text-sm mt-2";

    }

    else{

        passwordMessage.innerHTML =

        `
        Password must contain:
        <br>

        • Minimum 8 characters

        <br>

        • One uppercase letter

        <br>

        • One lowercase letter

        <br>

        • One number

        <br>

        • One special character (@,#,$,%,&)
        `;

        passwordMessage.className =
        "text-red-600 text-sm mt-2";

    }

});

// ==========================================
// CONFIRM PASSWORD
// ==========================================

confirmPassword.addEventListener("input", function(){

    if(confirmPassword.value === ""){

        confirmMessage.textContent = "";

    }

    else if(password.value === confirmPassword.value){

        confirmMessage.textContent =
        "✓ Passwords Match";

        confirmMessage.className =
        "text-green-600 text-sm mt-2";

    }

    else{

        confirmMessage.textContent =
        "✗ Passwords Do Not Match";

        confirmMessage.className =
        "text-red-600 text-sm mt-2";

    }

});