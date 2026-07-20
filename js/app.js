// ==========================================
// APP CONTAINER
// ==========================================

const app = document.getElementById("app");

// ==========================================
// RENDER DONOR REGISTRATION FORM
// ==========================================

app.innerHTML = `

<div class="bg-white shadow-lg rounded-xl p-8 mt-10">

    <h1 class="text-4xl font-bold text-center text-red-700 mb-2">
        Blood Donor Registration
    </h1>

    <p class="text-center text-gray-500 mb-8">
        Please fill in your information to become a voluntary blood donor.
    </p>

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
                class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500">

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
                class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500">

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
                class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500">

            <p
                id="phoneError"
                class="text-sm mt-2 text-red-600">

            </p>

        </div>

        <!-- Blood Group -->

        <div>

            <label class="block font-semibold mb-2">

                Blood Group

            </label>

            <select
                id="bloodGroup"
                class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500">

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
                class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500">

        </div>

        <!-- Password -->

        <div>

            <label class="block font-semibold mb-2">

                Password

            </label>

            <input
                id="password"
                type="password"
                placeholder="Create a strong password"
                class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500">

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
                placeholder="Re-enter your password"
                class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500">

            <p
                id="confirmMessage"
                class="text-sm mt-2">

            </p>

        </div>

        <!-- Submit Button -->

        <button
            type="submit"
            class="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-semibold transition">

            Register Now

        </button>

    </form>

</div>

`;