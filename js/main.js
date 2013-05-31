$(function() {
    $('#title').addClass('animated flipInX');
    setTimeout(function(){
        $("#title").removeClass("animated flipInX");
        $('#title').on("click", 
            function(){
                if (!$(this).hasClass("animated")) {
                    $(this).addClass("animated swing");
                    setTimeout(function(){
                        $("#title").removeClass("animated swing");
                    }, 2000);
                }                        
            }
        );
    }, 1000);
});