let submit = document.querySelector(".btn");
submit.addEventListener("click", function () {
    let pass = document.getElementById('pass');
    let pass2 = document.getElementById('pass2');
    console.log(pass.value);
    console.log(pass2.value);
    if (pass.value === pass2.value && pass.value !== "" && !pass.value.includes(" ")) {
        document.querySelector(".spn").style.visibility = 'hidden';
        console.log("welcome");
        alert("You are welcome");
    }
    else {
        console.log("ввести одинаковые");
        document.querySelector(".spn").style.visibility = 'visible';
    }
});

let showHide = function () {
    if (this.previousElementSibling.type == 'text') {
        this.previousElementSibling.setAttribute('type', 'password');
        event.target.classList.remove('fa-eye');
        event.target.classList.add('fa-eye-slash');
        return;
    }
    else {
        this.previousElementSibling.setAttribute('type', 'text');
        event.target.classList.remove('fa-eye-slash');
        event.target.classList.add('fa-eye');
        return;
    }
}

// document.getElementById("eye").addEventListener("click", showHide, false);
// document.getElementById("eye2").addEventListener("click", showHide,false);

document.querySelectorAll('.fas').forEach(function (btn) {
    btn.addEventListener('click', showHide, false)
});












