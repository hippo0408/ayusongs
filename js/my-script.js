$(function(){

    $(".page-top").hide();

    $(window).scroll(function(){
if($(this).scrollTop()>100){
    $(".page-top").fadeIn();
}else{
    $(".page-top").fadeOut();   
}
    });

    $(".page-top").click(function(){
    $("body,html").animate({scrollTop:0},500);
    return false;
    });

    $('.slider').slick({
     autoplay:true,
     autoplaySpeed:2000,
     fade:true,
     speed:1000,
     cssEase:"linear"
    });

    


    
    $("ul.drop-down").hide();
    $(".side-menu ul li").mouseover(function(){
       $(this).next("ul.drop-down").slideDown(500) 
    });
    $(".ranking").mouseleave(function(){
        $("ul.drop-down").slideUp(300);
        
    });

    $("ul.drop-down").hide();
    $(".sub-menu ul li").mouseover(function(){
       $(this).next("ul.drop-down").slideDown(500) 
    });
    $(".sub-menu").mouseleave(function(){
        $("ul.drop-down").slideUp(300);
        
    });

    
    $("ul.sub-list").hide();
    $(".title-wrapper ul li").mouseover(function(){
       $(this).next("ul.sub-list").slideDown(500) 
    });
    $(".title-wrapper").mouseleave(function(){
        $("ul.sub-list").slideUp(300);
        $(this).toggleClass("open");
        $(".title-wrapper ul li").not(this).removeClass("open"); 
        $(".title-wrapper ul li").not($(this)).next("ul.sub-list").slideUp;
    
});

    $(".line").animate({"width":"100%"},1500,function(){
        $(".line").css("right",0)
        $(".line").animate({"width":"0%"},function(){
            $(".up").animate({"height":"0%"});
            $(".down").animate({"height":"0%"});
        });
    });

    $(".icon").click(function(){
        $(this).next("ul.subnav").slideToggle();
        $(this).find("#open-icon").toggleClass("rotate");
     });
     

 });
