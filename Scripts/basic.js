// footer change event based on the size of window
function footerChange(x) {
    if (x.matches) { // If media query matches
        $("#footerIndex").html('<a href="https://play.google.com/store/apps/details?id=com.squareenix.lis&hl=en">Get it on android</a><a href="https://itunes.apple.com/us/app/life-is-strange/id1180101534?mt=8">Get it on iphone</a>');
    } else {
        $("#footerIndex").html("big");
    }
}
var x = window.matchMedia("(max-width: 700px)")
footerChange(x) // Call listener function at run time
x.addListener(footerChange) // Attach listener function on state changes