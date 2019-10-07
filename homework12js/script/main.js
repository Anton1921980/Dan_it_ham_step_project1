 let images = [];
 let i = 0;
 let timer;

images[0] = './images/img1.jpg';
images[1] = './images/img2.jpg';
images[2] = './images/img3.jpg';
images[3] = './images/img4.png';
console.log(images);
window.onload = changeImage;

function changeImage(){
    document.slider.src = images[i];
    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    timer = setTimeout(changeImage, 3000);
}

document.getElementById('stop').onclick = function () {
    clearInterval(timer);
 };

 document.getElementById('start').onclick = function () {
     setTimeout(changeImage,3000);
 };

 