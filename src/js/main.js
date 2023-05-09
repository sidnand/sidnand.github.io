let body = document.body;
let darkModeIcon = document.querySelector("#dark-mode-toggle i");
let header = document.querySelector("#header");

let darkMode = localStorage.getItem("latex-dark");

let main = () => {
    if (darkMode === "true") changeUIDark();
}

let toggleDark = () => {
    if (darkMode !== "true") {
        localStorage.setItem("latex-dark", "true");
    } else {
        localStorage.setItem("latex-dark", "false");
    }

    changeUIDark();
}

let changeUIDark = () => {
    body.classList.toggle("latex-dark");

    darkModeIcon.classList.toggle("fa-sun");
    darkModeIcon.classList.toggle("fa-moon");

    if (darkModeIcon.classList.contains("fa-moon")) {
        darkModeIcon.style.color = "black";
        header.style.backgroundColor = "hsl(210, 20%, 98%)";
    }
    else {
        darkModeIcon.style.color = "white";
        header.style.backgroundColor = "hsl(0, 0%, 16%)";
    }
}

main();