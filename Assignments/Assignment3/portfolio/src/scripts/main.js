$(document).ready(function() {
    $(".option-content").hide();
    $(".arrow-side").hide();
    $(".destination-name").click(function(){
            $(this).next(".option-content").slideToggle();
            $(this).find(".arrow-side, .arrow-down").toggle();
    });
});