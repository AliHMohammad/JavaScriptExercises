window.addEventListener("load", start);

function start() {
    document.querySelector("#orange_container").addEventListener("click", jumpOnce);
}

function jumpOnce() {
    console.log("JUMP!");
    document.querySelector("#orange_container").removeEventListener("click", jumpOnce);
    document.querySelector("#orange_container").classList.add("jump-once");
    document.querySelector("#orange_container").addEventListener("animationend", removeJumpOnce);
}

function removeJumpOnce() {
    document.querySelector("#orange_container").addEventListener("click", jumpOnce);
    document.querySelector("#orange_container").classList.remove("jump-once");
}