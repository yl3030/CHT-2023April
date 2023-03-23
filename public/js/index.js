
$(document).on('click',".question",function(event){
    var icon_1 = $(".icon-1");
    var icon_2 = $(".icon-2");
    var xMousePos = event.pageX;
    var yMousePos = event.pageY;
    if (!icon_1.is(event.target) && icon_1.has(event.target).length === 0) {
        if (!icon_2.is(event.target) && icon_2.has(event.target).length === 0) {
            let errorIcon = $("<img class='error' src='./public/img/error.png'>").css("top",yMousePos).css("left",xMousePos);
            $(".page").append(errorIcon);
            $(document).ready(function(){
                $(".page").find(".error").each(function(){
                    $(this).delay(2000).fadeOut(100);
                })
            }) 
        }
    }
})

$(".icon-1").click(function(){
    $(".circle-1").show();
    $(this).addClass("active");
    if($(".icon-2").hasClass("active")) {
        $(".popup").delay(400).fadeIn(300);
        $("body").css("overflow","hidden");
    }
})

$(".icon-2").click(function(){
    $(".circle-2").show();
    $(this).addClass("active");
    if($(".icon-1").hasClass("active")) {
        $(".popup").delay(400).fadeIn(300);
        $("body").css("overflow","hidden");
    }
})