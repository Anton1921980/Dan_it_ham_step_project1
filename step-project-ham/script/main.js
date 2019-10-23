// our services,  tabs

const tabsTitle = document.querySelectorAll(".tabs li");
for (let i = 0; i < tabsTitle.length; i++) {
    tabsTitle[i].addEventListener('click', function () {
        const removeActive = document.querySelectorAll(".tabs li, .tabs-content li");
        for (let i = 0; i < removeActive.length; i++) {
            removeActive[i].classList.remove("active");
        }       
        this.classList.add("active");
        const tabId = this.dataset.target;       
        const tab = document.getElementById(tabId);
        tab.classList.add("active");
    });
}
// our amazing work, tabs2 

$(document).ready(function () { 
    $('#myList li').hover(function(){        
        let  hover= document.getElementById('box-hover')
        this.append(hover);       
        $('#box-hover').slideDown(400);        
    }, 
    function(){                
        $('#box-hover').slideUp(200);   
        $('#box-hover').stop(false, true); 
    })   
    size_li = $("#myList li").size();
    let x = 12;
    $('#myList li:lt(' + x + ')').show();
    $('#loadMore').click(function () {
        x = (x + 12 <= size_li) ? x + 12 : size_li;
        $('#myList li:lt(' + x + ')').show();       
        if (x == size_li) {
            $('#loadMore').hide();
        }
    });  

    $('[data-id]').click(function () {  
        $('#myList li:lt(' + x + ')').show();
        $(".tabs-title2").removeClass("filtered");
        $("#myList li::nth-child(4n)").addClass("3");
        $("#myList li::nth-child(4n-1)").addClass("2");
        $("#myList li::nth-child(4n-2)").addClass("4");
        $("#myList li::nth-child(4n-3)").addClass("5");
        let items = $('#myList li');
        let id = $(this).attr('data-id');  
        if (id == 1) {
            $('#myList li:lt(' + x + ')').show();
            $('#loadMore').show();          
            this.classList.toggle("filtered");
        }
        else {                
            $( "#myList li" ).not( `[class="${id}"]` ).hide();             
            $('#loadMore').hide();
            this.classList.toggle("filtered");                   
        }
    });
});
// what people say about the Ham, slider 

const sliderWrapper = document.getElementsByClassName('wrapper-slider')[0];
sliderWrapper.addEventListener('click', ({target}) => {
    if (target.classList.contains('img-slider')) {
        let activeIndex = target.dataset.set;
        let circles = Array.from(document.getElementsByClassName('img-slider'));
        let reviews = Array.from(document.getElementsByClassName('review-container'));
        circles.forEach(circle => circle.classList.remove('zoom'));
        circles[activeIndex - 1].classList.add('zoom');
        reviews.forEach(review => review.classList.remove('active'));
        reviews[activeIndex - 1].classList.add('active');
    }
});
const leftArrowBtn = document.getElementsByClassName('btn-left')[0];
leftArrowBtn.addEventListener('click', () => {
    let circles = Array.from(document.getElementsByClassName('img-slider'));
    let prevActiveIndex = circles.findIndex(circle => circle.classList.contains('zoom'));
    let nextActiveIndex = prevActiveIndex === 0 ? circles.length - 1 : prevActiveIndex - 1;
    circles.forEach(circle => circle.classList.remove('zoom'));
    circles[nextActiveIndex].classList.add('zoom');
    activateReview(nextActiveIndex);
});
const rightArrowBtn = document.getElementsByClassName('btn-right')[0];
rightArrowBtn.addEventListener('click', () => {
    let circles = Array.from(document.getElementsByClassName('img-slider'));
    let prevActiveIndex = circles.findIndex(circle => circle.classList.contains('zoom'));
    let nextActiveIndex = prevActiveIndex === circles.length - 1 ? 0 : prevActiveIndex + 1;
    circles.forEach(circle => circle.classList.remove('zoom'));
    circles[nextActiveIndex].classList.add('zoom');
    activateReview(nextActiveIndex);
});
function activateReview(index) {
    let reviews = Array.from(document.getElementsByClassName('review-container'));
    reviews.forEach(review => review.classList.remove('active'));
    reviews[index].classList.add('active');
}
