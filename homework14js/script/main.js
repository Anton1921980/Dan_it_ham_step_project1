$(document).ready(function () {
    $(".tabs li").click(function () { 
        $(".tabs li").removeClass("active");
        $(this).addClass("active"); 
        $(".tabs-content li").hide();
        let x = $(this).data("target"); 
        $(`#${x}`).show(); 
    });
})

