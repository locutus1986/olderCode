$(document).ready(function(){
    let width = $(document).width();
    width /= 1.5;
    let height = $(document).height();
    height /= 4;
    $('#falcon').hide();
    $("#shuttle").animate({
        left: width,
        top: height
    }, 5000, function() {
        $("#shuttle").css("display", "none");
        $('#falcon').fadeIn(3000);
    });

});
