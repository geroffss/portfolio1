document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const topDiv = document.querySelector(".topdiv2");
    const mainSection = document.querySelector(".main");

    hamburger.addEventListener("click", toggleMenu);

    function toggleMenu() {
        topDiv.classList.toggle("active");
    }

    mainSection.addEventListener("mouseover", closeMenu);

    function closeMenu() {
        topDiv.classList.remove("active");
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const descriptions = document.querySelectorAll(".description");
    const skills = document.querySelectorAll(".skill");

    skills.forEach(function (skill, index) {
        skill.addEventListener("mouseover", function () {
            descriptions[index].style.display = "block";
            skills[index].style.height = "200px";
            skills[index].style.width = "auto";
        });

        skill.addEventListener("mouseleave", function () {
            descriptions[index].style.display = "none";
            skills[index].style.height = "150px";
            skills[index].style.width = "auto";
        });

        function myFunction(x) {
            if (x.matches) {
                skill.addEventListener("mouseover", function () {
                    descriptions[index].style.display = "block";
                    skills[index].style.height = "auto";
                    skills[index].style.width = "200px";
                });
            } else {
                skill.addEventListener("mouseleave", function () {
                    descriptions[index].style.display = "none";
                    skills[index].style.height = "150px";
                    skills[index].style.width = "auto";
                });
            }
        }

        var x = window.matchMedia("(max-width: 975px)")
        myFunction(x)
    });
});

function toggleForms() {
    const loginBtn = document.getElementById("showlogin");
    const signupBtn = document.getElementById("showsignup");
    const goHomeBtn = document.getElementById("gohome");
    const loginForm = document.querySelector(".loginform");
    const signupForm = document.querySelector(".signupform");

    if (!loginBtn || !signupBtn || !goHomeBtn || !loginForm || !signupForm) {
        console.error('One or more elements could not be found');
        return;
    }

    function showForm(formToShow, formToHide) {
        formToShow.style.display = "block";
        formToHide.style.display = "none";
    }

    loginBtn.addEventListener("click", (event) => {
        event.preventDefault();
        showForm(loginForm, signupForm);
    });

    signupBtn.addEventListener("click", (event) => {
        event.preventDefault();
        showForm(signupForm, loginForm);
    });

    goHomeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "index.html";
    });

    // Check for 'join' query parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('join')) {
        showForm(signupForm, loginForm);
    }
    if (urlParams.has('login')) {
        showForm(loginForm, signupForm);
    }
}

document.addEventListener('DOMContentLoaded', toggleForms);

window.onload = toggleForms;
