
function
    textcolor() {
    let count = parseInt(document.getElementById("value").textContent);
    if (count > 0) {
        document.getElementById("value").style.color = "green";
    }
    else if (count < 0) {
        document.getElementById("value").style.color = "red";
    }
    else {
        document.getElementById("value").style.color = "black";
    }
}
function increase() {
    document.getElementById("value").textContent = parseInt(document.getElementById("value").textContent) + 1;
    textcolor()
}
function reset() {
    document.getElementById("value").textContent = 0;
    textcolor()
}
function decerease() {
    document.getElementById("value").textContent = parseInt(document.getElementById("value").textContent) - 1;
    textcolor()
}

