// footer change event based on the size of window
function footerChange(x) {
    if (x.matches) { // If media query matches
        $("#footerIndex").html("small");
    } else {
        $("#footerIndex").html("big");
    }
}
var x = window.matchMedia("(max-width: 700px)")
footerChange(x) // Call listener function at run time
x.addListener(footerChange) // Attach listener function on state changes