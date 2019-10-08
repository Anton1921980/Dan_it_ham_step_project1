function show() {
    let p = document.getElementById('pass');
    p.setAttribute('type', 'text');       
    event.target.classList.toggle('fa-eye-slash');
    event.target.classList.toggle('fa-eye');
        
}

function hide() {
    let p = document.getElementById('pass');
    p.setAttribute('type', 'password');
    event.target.classList.toggle('fa-eye-slash');
    event.target.classList.toggle('fa-eye');
}

let passShown = 0;
// let qqq=document.querySelectorAll("#eye, #eye2");
// console.log(qqq);
let rrr=document.getElementById("eye");
let sss=document.getElementById("eye2");

rrr.addEventListener("click", function () {
    if (passShown == 0) {
        passShown = 1;
        show();

    } else {
        passShown = 0;
        hide();
    }
}, false);

sss.addEventListener("click", function () {
    if (passShown == 0) {
        passShown = 1;
        show();

    } else {
        passShown = 0;
        hide();
    }
}, false);