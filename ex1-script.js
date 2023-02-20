window.addEventListener("load", start);

const orangeContainer = document.querySelector("#orange_container");


function start() {
    orangeContainer.addEventListener("mousedown", jump);
}

function jump() {
    orangeContainer.classList.add("jump");
}