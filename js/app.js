// ==========================================
// APP CONTAINER & DOM SETUP
// ==========================================

const app = document.getElementById("app");
const successMessage = document.getElementById("successMessage");

if (app) {
    // RENDER DONOR REGISTRATION FORM
    app.innerHTML = `
    <div class="bg-white shadow-xl rounded-2xl p-8 border border-red-100">
        <h1 class="text-3xl font-extrabold text-center text-red-700 mb-2">
            Blood Donor Registration
        </h1>
        <p class="text-center text-gray-500 mb-8 text-sm">
            Please fill in your information to become a voluntary blood donor.
        </p>

        <form id="donorForm" class="space-y-6">
            <!-- Full Name -->
            <div>
                <label class="block font-semibold mb-2 text-gray-700">Full Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition">
            </div>

            <!-- Email -->
            <div>
                <label class="block font-semibold mb-2 text-gray-700">Email Address</label>
                <input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition">
                <p id="emailMessage" class="text-sm mt-1"></p>
            </div>

            <!-- Phone -->
            <div>
                <label class="block font-semibold mb-2 text-gray-700">Phone Number</label>
                <input
                    id="phone"
                    type="text"
                    placeholder="01XXXXXXXXX"
                    class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition">
                <p id="phoneError" class="text-sm text-red-600 mt-1"></p>
            </div>

            <!-- Blood Group -->
            <div>
                <label class="block font-semibold mb-2 text-gray-700">Blood Group</label>
                <select
                    id="bloodGroup"
                    class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition">
                    <option value="">Select Blood Group</option>
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
                <label class="block font-semibold mb-2 text-gray-700">Location</label>
                <input
                    id="location"
                    type="text"
                    placeholder="Enter your city (e.g. Dhaka, Chittagong)"
                    class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition">
            </div>

            <!-- Password -->
            <div>
                <label class="block font-semibold mb-2 text-gray-700">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition">
                <p id="passwordMessage" class="text-sm mt-1"></p>
            </div>

            <!-- Confirm Password -->
            <div>
                <label class="block font-semibold mb-2 text-gray-700">Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition">
                <p id="confirmMessage" class="text-sm mt-1"></p>
            </div>

            <button
                type="submit"
                class="w-full bg-red-700 hover:bg-red-800 text-white py-3.5 rounded-lg text-lg font-bold shadow-md hover:shadow-lg transition duration-200">
                Register Now
            </button>
        </form>
    </div>
    `;

    // DOM ELEMENTS
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

    // HELPER NOTIFICATION TOAST
    function showToast(message, color = "red") {
        const toast = document.createElement("div");
        toast.className = `fixed top-5 right-5 px-6 py-3.5 rounded-xl shadow-2xl text-white font-semibold z-50 transition-all duration-300 ${
            color === "green" ? "bg-green-600" : "bg-red-600"
        }`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(-20px)";
        }, 2500);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // REAL-TIME EMAIL VALIDATION
    if (donorEmail) {
        donorEmail.addEventListener("input", function () {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailPattern.test(donorEmail.value.trim())) {
                emailMessage.textContent = "✓ Valid Email Address";
                emailMessage.className = "text-green-600 text-sm mt-1 font-medium";
            } else if (donorEmail.value === "") {
                emailMessage.textContent = "";
            } else {
                emailMessage.textContent = "✗ Invalid Email Address";
                emailMessage.className = "text-red-600 text-sm mt-1 font-medium";
            }
        });
    }

    // REAL-TIME PHONE VALIDATION
    if (donorPhone) {
        donorPhone.addEventListener("input", function () {
            const phonePattern = /^01[3-9]\d{8}$/;
            if (phonePattern.test(donorPhone.value.trim())) {
                phoneError.textContent = "";
            } else if (donorPhone.value === "") {
                phoneError.textContent = "";
            } else {
                phoneError.textContent = "Enter a valid Bangladeshi phone number (e.g. 01712345678).";
            }
        });
    }

    // REAL-TIME PASSWORD STRENGTH ANALYZER
    if (password) {
        password.addEventListener("input", function () {
            const val = password.value;
            const hasUpper = /[A-Z]/.test(val);
            const hasLower = /[a-z]/.test(val);
            const hasNumber = /\d/.test(val);
            const hasSpecial = /[@$!%*?&#]/.test(val);

            if (val.length >= 8 && hasUpper && hasLower && hasNumber && hasSpecial) {
                passwordMessage.textContent = "✓ Strong Password";
                passwordMessage.className = "text-green-600 text-sm mt-1 font-semibold";
            } else if (val.length >= 6 && hasUpper && hasLower && hasNumber) {
                passwordMessage.textContent = "⚠ Medium Password";
                passwordMessage.className = "text-amber-600 text-sm mt-1 font-medium";
            } else if (val === "") {
                passwordMessage.textContent = "";
            } else {
                passwordMessage.innerHTML = "Requires: 8+ chars, upper & lower letters, number, special char";
                passwordMessage.className = "text-red-600 text-xs mt-1";
            }
        });
    }

    // CONFIRM PASSWORD MATCHING
    if (confirmPassword) {
        confirmPassword.addEventListener("input", function () {
            if (confirmPassword.value === "") {
                confirmMessage.textContent = "";
            } else if (password.value === confirmPassword.value) {
                confirmMessage.textContent = "✓ Passwords Match";
                confirmMessage.className = "text-green-600 text-sm mt-1 font-semibold";
            } else {
                confirmMessage.textContent = "✗ Passwords Do Not Match";
                confirmMessage.className = "text-red-600 text-sm mt-1 font-semibold";
            }
        });
    }

    // FORM SUBMISSION HANDLER
    if (donorForm) {
        donorForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const namePattern = /^[A-Za-z ]+$/;
            const phonePattern = /^01[3-9]\d{8}$/;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

            if (
                !donorName.value.trim() ||
                !donorEmail.value.trim() ||
                !donorPhone.value.trim() ||
                !bloodGroup.value ||
                !donorLocation.value.trim() ||
                !password.value ||
                !confirmPassword.value
            ) {
                showToast("Please fill in all required fields.", "red");
                return;
            }

            if (!namePattern.test(donorName.value.trim())) {
                showToast("Name should contain only letters.", "red");
                return;
            }

            if (!emailPattern.test(donorEmail.value.trim())) {
                showToast("Please enter a valid email address.", "red");
                return;
            }

            if (!phonePattern.test(donorPhone.value.trim())) {
                showToast("Please enter a valid 11-digit Bangladeshi phone number.", "red");
                return;
            }

            if (!strongPassword.test(password.value)) {
                showToast("Password must contain upper & lower letters, number, and special character.", "red");
                return;
            }

            if (password.value !== confirmPassword.value) {
                showToast("Passwords do not match.", "red");
                return;
            }

            // SUCCESS FEEDBACK
            app.classList.add("hidden");
            if (successMessage) {
                successMessage.classList.remove("hidden");
                successMessage.innerHTML = `
                <div class="bg-white shadow-2xl rounded-2xl p-10 text-center border border-green-100 max-w-xl mx-auto">
                    <div class="text-6xl mb-4 text-green-500">✓</div>
                    <h2 class="text-3xl font-extrabold text-green-600">Registration Successful!</h2>
                    <p class="text-gray-600 mt-4">Thank you for registering as a voluntary blood donor.</p>
                    <p class="text-gray-500 text-sm mt-1">Your profile has been saved successfully.</p>
                    <div class="mt-8 flex justify-center gap-4">
                        <a href="index.html" class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold transition">
                            Back to Home
                        </a>
                        <a href="login.php" class="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition">
                            Go to Login
                        </a>
                    </div>
                </div>
                `;
            }
        });
    }

    // STATISTICS SECTION
    const statistics = [
        { title: "Registered Donors", count: "540+", color: "text-red-600" },
        { title: "Blood Requests", count: "120+", color: "text-rose-600" },
        { title: "Available Donors", count: "380+", color: "text-emerald-600" }
    ];

    const statsContainer = document.createElement("div");
    statsContainer.className = "grid grid-cols-1 md:grid-cols-3 gap-6 mt-10";

    statistics.forEach((stat) => {
        const card = document.createElement("div");
        card.className = "bg-white shadow-lg rounded-xl p-6 text-center border border-gray-100 hover:shadow-xl transition";
        card.innerHTML = `
            <h3 class="text-gray-500 font-medium text-sm mb-1">${stat.title}</h3>
            <p class="text-3xl font-extrabold ${stat.color}">${stat.count}</p>
        `;
        statsContainer.appendChild(card);
    });

    app.appendChild(statsContainer);
}