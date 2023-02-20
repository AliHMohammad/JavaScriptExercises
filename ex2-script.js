window.addEventListener("load", start);


function start() {
    document.querySelector("#blue_container").addEventListener("mousedown", fallOver);
}

function fallOver() {
    document.querySelector("#blue_container").classList.add("fallover")
}