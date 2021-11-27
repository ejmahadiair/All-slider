var slides = document.getElementsByClassName("slider");
var slidelayer = document.getElementsByClassName("layer");
var counter = 0;
var lefts = 0;
var temp = 0;
var tap = 0;
var index = 0;

function next() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.left = "456px";
    }
    counter++;
    // lefts = counter - 1;
    slides[counter - 1].style.left = "-100%";
    slides[counter - 1].style.zIndex = "1";
    slides[counter - 1].style.visibility = "hidden";
    slidelayer[counter - 1].style.backgroundColor = " rgba(0, 0, 0, 0.7)";
    // if (lefts == 0) {
    //     temp = slides.length - 1;
    //     slides[temp].style.left = "456px";
    //     slides[temp].style.zIndex = "2";
    //     slides[temp].style.visibility = "hidden";
    // } else {
    //     temp = lefts - 1;
    //     slides[temp].style.left = "456px";
    //     slides[temp].style.zIndex = "2";
    //     slides[temp].style.visibility = "hidden";
    // }

    if (counter > slides.length - 1) {
        counter = 0;
        slides[counter].style.left = "0";
        slides[counter].style.zIndex = "3";
        slides[counter].style.visibility = "visible";
        slidelayer[counter].style.backgroundColor = " transparent";

    } else {
        slides[counter].style.left = "0";
        slides[counter].style.zIndex = "3";
        slides[counter].style.visibility = "visible";
        slidelayer[counter].style.backgroundColor = " transparent";

    }
}

function priv() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.left = "-100%";
    }
    counter--;

    slides[counter + 1].style.left = "456px";
    slides[counter + 1].style.zIndex = "1";
    slides[counter + 1].style.visibility = "hidden";
    slidelayer[counter + 1].style.backgroundColor = " rgba(0, 0, 0, 0.7)";


    if (counter < 0) {
        counter = slides.length - 1;
        slides[counter].style.left = "0";
        slides[counter].style.zIndex = "3";
        slides[counter].style.visibility = "visible";
        slidelayer[counter].style.backgroundColor = " transparent";

    } else {
        slides[counter].style.left = "0";
        slides[counter].style.zIndex = "3";
        slides[counter].style.visibility = "visible";
        slidelayer[counter].style.backgroundColor = " transparent";

    }




    // // if (lefts == tap) {
    // //     temp = 0;
    // //     slides[temp].style.left = "-100%";
    // //     slides[temp].style.zIndex = "2";
    // //     slides[temp].style.visibility = "hidden";
    // // } else {
    // //     temp = lefts + 1;
    // //     slides[temp].style.left = "-100%";
    // //     slides[temp].style.zIndex = "2";
    // //     slides[temp].style.visibility = "hidden";
    // // }

    // lefts = counter + 1;
    // tap = slides.length - 1;

    // if (lefts == tap) {
    //     temp = 0;
    //     slides[temp].style.left = "-100%";
    //     slides[temp].style.zIndex = "1";
    //     slides[temp].style.visibility = "hidden";
    // } else {
    //     temp = lefts + 1;
    //     slides[temp].style.left = "-100%";
    //     slides[temp].style.zIndex = "1";
    //     slides[temp].style.visibility = "hidden";
    // }

    // counter--;
    // lefts = counter + 1;
    // slides[counter + 1].style.left = "456px";
    // slides[counter + 1].style.zIndex = "1";
    // slides[counter + 1].style.visibility = "hidden";
    // if (lefts == slides.length - 1) {
    //     temp = 0;
    //     slides[temp].style.left = "-100%";
    //     slides[temp].style.zIndex = "2";
    //     slides[temp].style.visibility = "hidden";
    // } else {
    //     temp = lefts + 1;
    //     slides[temp].style.left = "456px";
    //     slides[temp].style.zIndex = "2";
    //     slides[temp].style.visibility = "hidden";
    // }
    // if (counter < 0) {
    //     counter = slides.length - 1;
    //     slides[counter].style.left = "0";
    //     slides[counter].style.zIndex = "3";
    //     slides[counter].style.visibility = "visible";

    // } else {
    //     slides[counter].style.left = "0";
    //     slides[counter].style.zIndex = "3";
    //     slides[counter].style.visibility = "visible";

    // }

}
//setInterval(next, 5000);
function gallerymove(n) {

    temp = index;
    lefts = slidelayer / 2;
    slidelayer[temp].style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    slides[temp].style.left = "-100%";
    // slides[temp].style.visibility = "hidden";
    index = n;

    slidelayer[index].style.backgroundColor = "transparent";
    slides[index].style.left = "0";
    slides[index].style.visibility = "visible";
}