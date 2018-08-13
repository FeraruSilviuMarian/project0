function myFunction(x) {
    if (x.matches) { // If media query matches
        $("#footerIndex").innerHTML = "small";
    } else {
        $("#footerIndex").innerHTML = "big";
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes