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
