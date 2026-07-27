// ==========================================
// APP CONTAINER
// ==========================================

const app = document.getElementById("app");
const successMessage = document.getElementById("successMessage");

// ==========================================
// CREATE REGISTRATION FORM
// ==========================================

app.innerHTML = `

<div class="bg-white shadow-xl rounded-xl p-8">

    
    <form id="donorForm" class="space-y-6">

        <!-- Full Name -->

        <div>

            <label class="block font-semibold mb-2">

                Full Name

            </label>

            <input

                id="name"

                type="text"

                placeholder="Enter your full name"

                class="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500">

        </div>

        <!-- Email -->

        <div>

            <label class="block font-semibold mb-2">

                Email Address

            </label>

            <input

                id="email"

                type="email"

                placeholder="example@gmail.com"

                class="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500">

            <p

                id="emailMessage"

                class="text-sm mt-2">

            </p>

        </div>

        <!-- Phone -->

        <div>

            <label class="block font-semibold mb-2">

                Phone Number

            </label>

            <input

                id="phone"

                type="text"

                placeholder="01XXXXXXXXX"

                class="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500">

            <p

                id="phoneError"

                class="text-sm text-red-600 mt-2">

            </p>

        </div>

        <!-- Blood Group -->

        <div>

            <label class="block font-semibold mb-2">

                Blood Group

            </label>

            <select

                id="bloodGroup"

                class="w-full border rounded-lg p-3">

                <option value="">

                    Select Blood Group

                </option>

                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>

            </select>

        </div>

        <!-- Location -->

        <div>

            <label class="block font-semibold mb-2">

                Location

            </label>

            <input

                id="location"

                type="text"

                placeholder="Enter your city"

                class="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500">

        </div>

        <!-- Password -->

        <div>

            <label class="block font-semibold mb-2">

                Password

            </label>

            <input

                id="password"

                type="password"

                placeholder="Create Password"

                class="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500">

            <p

                id="passwordMessage"

                class="text-sm mt-2">

            </p>

        </div>

        <!-- Confirm Password -->

        <div>

            <label class="block font-semibold mb-2">

                Confirm Password

            </label>

            <input

                id="confirmPassword"

                type="password"

                placeholder="Confirm Password"

                class="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500">

            <p

                id="confirmMessage"

                class="text-sm mt-2">

            </p>

        </div>

        <button

            type="submit"

            class="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg text-lg font-semibold transition">

            Register Now

        </button>

    </form>

</div>

`;
// ==========================================
// DOM ELEMENTS
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

function showError(message) {

    alert(message);

}

function showSuccess(message) {

    alert(message);

}

// ==========================================
// EMAIL VALIDATION
// ==========================================

donorEmail.addEventListener("input", function () {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(donorEmail.value)) {

        emailMessage.textContent = "✓ Valid Email Address";

        emailMessage.className =
            "text-green-600 text-sm mt-2";

    }

    else {

        emailMessage.textContent = "✗ Invalid Email Address";

        emailMessage.className =
            "text-red-600 text-sm mt-2";

    }

});

// ==========================================
// PHONE VALIDATION
// ==========================================

donorPhone.addEventListener("input", function () {

    const phonePattern = /^01[3-9]\d{8}$/;

    if (phonePattern.test(donorPhone.value)) {

        phoneError.textContent = "";

    }

    else {

        phoneError.textContent =
            "Enter a valid Bangladeshi phone number.";

    }

});

// ==========================================
// PASSWORD STRENGTH
// ==========================================

password.addEventListener("input", function () {

    const value = password.value;

    const hasUpper = /[A-Z]/.test(value);

    const hasLower = /[a-z]/.test(value);

    const hasNumber = /\d/.test(value);

    const hasSpecial = /[@$!%*?&#]/.test(value);

    if (

        value.length >= 8 &&

        hasUpper &&

        hasLower &&

        hasNumber &&

        hasSpecial

    ) {

        passwordMessage.textContent =
            "✓ Strong Password";

        passwordMessage.className =
            "text-green-600 text-sm mt-2";

    }

    else if (

        value.length >= 6 &&

        hasUpper &&

        hasLower &&

        hasNumber

    ) {

        passwordMessage.textContent =
            "Medium Password";

        passwordMessage.className =
            "text-yellow-600 text-sm mt-2";

    }

    else {

        passwordMessage.innerHTML = `

Minimum 8 characters<br>

One uppercase letter<br>

One lowercase letter<br>

One number<br>

One special character

`;

        passwordMessage.className =
            "text-red-600 text-sm mt-2";

    }

});

// ==========================================
// CONFIRM PASSWORD
// ==========================================

confirmPassword.addEventListener("input", function () {

    if (confirmPassword.value === "") {

        confirmMessage.textContent = "";

    }

    else if (password.value === confirmPassword.value) {

        confirmMessage.textContent =
            "✓ Passwords Match";

        confirmMessage.className =
            "text-green-600 text-sm mt-2";

    }

    else {

        confirmMessage.textContent =
            "✗ Passwords Do Not Match";

        confirmMessage.className =
            "text-red-600 text-sm mt-2";

    }

});
// ==========================================
// FORM SUBMISSION
// ==========================================

donorForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const namePattern = /^[A-Za-z ]+$/;

    const phonePattern = /^01[3-9]\d{8}$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const strongPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    // Empty Field Validation

    if (

        donorName.value.trim() === "" ||

        donorEmail.value.trim() === "" ||

        donorPhone.value.trim() === "" ||

        bloodGroup.value === "" ||

        donorLocation.value.trim() === "" ||

        password.value === "" ||

        confirmPassword.value === ""

    ) {

        showError("Please fill in all fields.");

        return;

    }

    // Name Validation

    if (!namePattern.test(donorName.value)) {

        showError("Name should contain only letters.");

        return;

    }

    // Email Validation

    if (!emailPattern.test(donorEmail.value)) {

        showError("Please enter a valid email.");

        return;

    }

    // Phone Validation

    if (!phonePattern.test(donorPhone.value)) {

        showError("Please enter a valid Bangladeshi phone number.");

        return;

    }

    // Password Validation

    if (!strongPassword.test(password.value)) {

        showError(
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
        );

        return;

    }

    // Confirm Password

    if (password.value !== confirmPassword.value) {

        showError("Passwords do not match.");

        return;

    }

    // ==========================================
    // SUCCESS PAGE
    // ==========================================

    app.classList.add("hidden");

    successMessage.classList.remove("hidden");

    successMessage.innerHTML = `

    <div class="bg-white shadow-xl rounded-xl p-10 text-center">

        <div class="text-7xl mb-5">

            ✅

        </div>

        <h2 class="text-4xl font-bold text-green-600">

            Registration Successful!

        </h2>

        <p class="text-gray-600 mt-5">

            Thank you for registering as a voluntary blood donor.

        </p>

        <p class="text-gray-500 mt-2">

            Your information has been verified successfully.

        </p>

        <a

            href="dashboard.php"

            class="inline-block mt-8 bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold transition">

            Go to Dashboard

        </a>

    </div>

    `;

});
// ==========================================
// BLOOD BANK STATISTICS
// ==========================================

const statistics = [

    {

        title: "Registered Donors",

        count: "540",

        color: "text-red-600"

    },

    {

        title: "Blood Requests",

        count: "120",

        color: "text-blue-600"

    },

    {

        title: "Available Donors",

        count: "380",

        color: "text-green-600"

    }

];

// ==========================================
// CREATE STATISTICS SECTION
// ==========================================

const statsContainer = document.createElement("div");

statsContainer.className =
"grid grid-cols-1 md:grid-cols-3 gap-6 mt-10";

// ==========================================
// CREATE CARDS
// ==========================================

statistics.forEach(function (stat) {

    const card = document.createElement("div");

    card.className =
    "bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition";

    card.innerHTML = `

        <h3 class="text-xl font-semibold mb-3">

            ${stat.title}

        </h3>

        <p class="text-4xl font-bold ${stat.color}">

            ${stat.count}

        </p>

    `;

    statsContainer.appendChild(card);

});

// ==========================================
// APPEND TO PAGE
// ==========================================

app.appendChild(statsContainer);

// ==========================================
// IMPROVED ALERT FUNCTIONS
// ==========================================

function showToast(message, color = "red") {

    const toast = document.createElement("div");

    toast.className =
        `fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg text-white font-semibold z-50
        ${color === "green" ? "bg-green-600" : "bg-red-600"}
        transition-all duration-300`;

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(function () {

        toast.style.opacity = "0";

        toast.style.transform = "translateY(-20px)";

    }, 2500);

    setTimeout(function () {

        toast.remove();

    }, 3000);

}

