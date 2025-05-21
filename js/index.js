                                        // ^ using Jquery 
// * change navbar position on scroll 
const aboutscroll = $("#about").offset().top;
$(window).on("scroll",function(){
    if($(window).scrollTop() > aboutscroll){
        $("#navbar").addClass("nav-fixed")
        $(".scroll-to-top").fadeIn(500)
    }
    else{

        $("#navbar").removeClass("nav-fixed")
        $(".scroll-to-top").fadeOut(500)
    }
})

// * btn for scroll 
$(".scroll-to-top").on("click",function(){
    $("html").animate({scrollTop:0},500)
})

// * scroll when click on section in navbar 

$(".nav-link").on("click",function(e){
    console.log("Hello")
    e.preventDefault()
   const currentanchor = $(this).attr("href"); 
   const scrollValue = $(currentanchor).offset().top;
    $("html, body").animate({scrollTop:scrollValue},500)
    
})