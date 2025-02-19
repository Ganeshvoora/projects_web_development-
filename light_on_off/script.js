
function on() {
    document.getElementById("bulb").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("swichon").style.backgroundColor = "green";
    document.getElementById("swichoff").style.backgroundColor = "#cbd2d9";
    document.getElementById("status").innerHTML = "Switched On";

}

function off() {
    document.getElementById("bulb").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("swichon").style.backgroundColor = "#cbd2d9";
    document.getElementById("swichoff").style.backgroundColor = "red";
    document.getElementById("status").innerHTML = "Switched Off";
}
console.log(document.getElementById("swichon"));
