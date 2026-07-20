donorForm.addEventListener("submit", function(event){

    event.preventDefault();

    const namePattern = /^[A-Za-z ]+$/;

    const phonePattern = /^01[3-9]\d{8}$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const strongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if(

        donorName.value.trim() === "" ||

        donorEmail.value.trim() === "" ||

        donorPhone.value.trim() === "" ||

        bloodGroup.value === "" ||

        donorLocation.value.trim() === "" ||

        password.value === "" ||

        confirmPassword.value === ""

    ){

        showError("Please fill in all fields.");

        return;

    }

    if(!namePattern.test(donorName.value)){

        showError("Name should contain only letters.");

        return;

    }

    if(!emailPattern.test(donorEmail.value)){

        showError("Please enter a valid email.");

        return;

    }

    if(!phonePattern.test(donorPhone.value)){

        showError("Please enter a valid Bangladeshi phone number.");

        return;

    }

    if(!strongPassword.test(password.value)){

        showError(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
        );

        return;

    }

    if(password.value !== confirmPassword.value){

        showError("Passwords do not match.");

        return;

    }

    showSuccess("Registration Successful!");

    donorForm.reset();

    emailMessage.textContent = "";

    passwordMessage.textContent = "";

    confirmMessage.textContent = "";

    phoneError.textContent = "";

});


const statistics = [

    {

        title:"Registered Donors",

        count:"540",

        color:"text-red-600"

    },

    {

        title:"Blood Requests",

        count:"120",

        color:"text-blue-600"

    },

    {

        title:"Available Donors",

        count:"380",

        color:"text-green-600"

    }

];



const statsContainer = document.createElement("div");

statsContainer.className =
"grid grid-cols-1 md:grid-cols-3 gap-6 mt-10";

/

statistics.forEach(function(stat){

    const card = document.createElement("div");

    card.className =
    "bg-white rounded-xl shadow-lg p-6 text-center";

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


app.appendChild(statsContainer);