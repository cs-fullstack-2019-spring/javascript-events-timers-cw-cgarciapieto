let clickme = document.getElementById("check");
let mytext = document.getElementById("textarea");
let enablebutton = document.getElementById("enable");
let h1tag = document.getElementById("h1tag");



clickme.addEventListener('click', function (ev) {
    alert("i told not to click this");
    ev.preventDefault()
});

h1tag.hidden.

let typeme = false;


enablebutton.addEventListener("click", function (e) {


    if (typeme) {
        mytext.setAttribute("disabled", " ");
        typeme = false;
    } else {
        mytext.removeAttribute("disabled");
        typeme = true;
    }

    typeme = true;

});
