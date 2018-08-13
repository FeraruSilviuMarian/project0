function myFunction(x) {
    if (x.matches) { // If media query matches
        $("#footerIndex").html("small");
    } else {
        $("#footerIndex").html("big");
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes