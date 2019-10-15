$(document).ready(function(){
    $("#to-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('#to-top').fadeIn();
            } else {
                $('#to-top').fadeOut();
            }
        });
        $('#to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
     });
    });
    
    $(document).ready(function(){
        $(".click").click(function(event) {
          event.preventDefault();
          let id = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({
              scrollTop: top
          }, 1000);
      });
    }); 
    
    
    
    
    $(document).ready(function(){
      $( "#show-hide").click(function() {     
       $('.most').toggle('slow')
    });
    })
    