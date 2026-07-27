<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Blood Bank Login</title>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

</head>

<body class="bg-red-50 min-h-screen flex flex-col">

    <!-- Header -->
    <header class="bg-red-700 shadow-lg">

        <div class="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

            <div class="flex items-center space-x-3">

                <span class="text-4xl">🩸</span>

                <div>

                    <h1 class="text-3xl font-bold text-white">
                        Blood Bank
                    </h1>

                    <p class="text-red-100 text-sm">
                        Blood Donation Management System
                    </p>

                </div>

            </div>

            <a href="register.html"
               class="bg-white text-red-700 px-5 py-2 rounded-lg font-semibold hover:bg-red-100 transition">

                Register

            </a>

        </div>

    </header>

    <!-- Login Section -->

    <main class="flex-grow flex items-center justify-center px-4">

        <div class="bg-white shadow-xl rounded-xl w-full max-w-md p-8">

            <h2 class="text-3xl font-bold text-center text-red-700 mb-2">

                Welcome Back

            </h2>

            <p class="text-center text-gray-500 mb-8">

                Login to your Blood Bank account

            </p>

            <form action="" method="POST" class="space-y-5">

                <!-- Email -->

                <div>

                    <label class="block font-semibold mb-2">

                        Email Address

                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500">

                </div>

                <!-- Password -->

                <div>

                    <label class="block font-semibold mb-2">

                        Password

                    </label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500">

                </div>

                <!-- Login Button -->

                <button
                    type="submit"
                    class="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition">

                    Login

                </button>

            </form>

         <p class="text-center mt-6 text-gray-600">

    Don't have an account?

    <a href="register.html"
       class="text-red-700 font-semibold hover:underline">

        Register

    </a>

</p>

        </div>

    </main>

    <!-- Footer -->

    <footer class="bg-red-700 text-white text-center py-4">

        <p>

            © 2026 Blood Bank Management System

        </p>

    </footer>

</body>

</html>
