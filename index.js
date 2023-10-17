$(document).ready(function () { 
    $('.veil').css('display', 'none')
    $('.inner-ul').css('display', 'none')
    $('.li1, .li2').hover(function () { 
        $(this).find('.inner-ul') 
           .stop(true, true).delay(100).slideDown(200);
        $(this).find('.arrow').attr('src', './images/icon-arrow-up.svg') 
    }, function () { 
        $(this).find('.inner-ul') 
          .stop(true, true).delay(100).slideUp(200);
        $(this).find('.arrow').attr('src', './images/icon-arrow-down.svg')  
    });
    
        document.getElementsByClassName('hero-img')[0].src = './images/image-hero-mobile.png'
        $('.menu-close').click(() => {
            $('.navbar').animate({right: "-100%"})
            $('.veil').css('display', 'none')
            $('body').css('overflow', 'auto')
        })
    
        $('.menu').click(() => {
            $('.navbar').animate({right: "0"})
            $('.veil').css('display', 'block').click(() => {
                $('.navbar').animate({right: "-100%"})
                $('.veil').css('display', 'none')
                $('body').css('overflow', 'auto')
            })
            $('body').css('overflow', 'hidden')
        })
    
        $(".li1, .li2").click(function(){
            $(this).find('.inner-ul')
                .stop(true, true).delay(100).slideToggle("slow");
          });
}); 

