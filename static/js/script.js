document.addEventListener("DOMContentLoaded", function () {

    // Role selection
    const roles = document.querySelectorAll(".role-switch button");

    roles.forEach(button => {
        button.addEventListener("click", function () {
            roles.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");
        });
    });


    // Show/Hide password
    const eye = document.querySelector(".eye");
    const password = document.getElementById("password");

    if (eye && password) {

        eye.addEventListener("click", function () {

            if (password.type === "password") {
                password.type = "text";
                eye.classList.replace("fa-eye", "fa-eye-slash");
            } 
            else {
                password.type = "password";
                eye.classList.replace("fa-eye-slash", "fa-eye");
            }

        });

    }


    // Live Clock
    const clock = document.getElementById("clock");

    function updateClock() {

        const now = new Date();

        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        const date = now.toLocaleDateString("en-US", options);
        const time = now.toLocaleTimeString("en-US");

        clock.innerHTML = `${date} | ${time}`;
    }

    if (clock) {
        updateClock();
        setInterval(updateClock, 1000);
    }


    // 3D card movement
    const card = document.querySelector(".login-card");

    document.addEventListener("mousemove", function(e) {

        if (card) {

            let x = (window.innerWidth / 2 - e.pageX) / 35;
            let y = (window.innerHeight / 2 - e.pageY) / 35;

            card.style.transform =
                `rotateY(${x}deg) rotateX(${-y}deg)`;

        }

    });

});
// Login redirect
const form = document.getElementById("loginForm");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const selectedRole =
            document.getElementById("selectedRole").value;

        if (selectedRole === "student") {

            window.location.href = "/student-dashboard";

        }
        else {

            window.location.href = "/lecturer-dashboard";

        }

    });

}
