let btn = document.getElementsByClassName("btn");
let key = document.addEventListener("keydown", pressBtn);
console.log(btn)
function pressBtn(e) {
  remove();
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].textContent.toUpperCase() === e.key.toUpperCase()){
      btn[i].classList.add("active");
    }
  }
}
function remove() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove("active");
  }
}