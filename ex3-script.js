window.addEventListener("load", start);

function start() {
    document.querySelector("#orange_container").classList.add("move");
    document.querySelector("#orange_container").addEventListener("click", jump);
}


function jump() {
    document.querySelector("#orange_container").classList.add("paused");
    document.querySelector("#orange_sprite").classList.add("jump");
}