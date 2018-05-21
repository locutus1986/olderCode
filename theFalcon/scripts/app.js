$(document).ready(function(){
    const redObj = $('#objectToBeActedUpon');

    var loop = function(){
        while( counter >= 0){
            redObj.animate({
                left:270
            }).animate({
                top:170
            }).animate({
                left:0,
            }).animate({
                top:0
            });
            counter--;
        }
    }

    $('#btn0').on('click', function(){
        counter = 0;
        loop();
    });

    let counter = -1;
    $('#btn1').on('click', function(){
        counter = 9;
        loop();
    });
    $('#btn2').on('click', function(){
        redObj.stop(true, true).animate({
            left:0,
            top:0,
        });
    });

    $('#btn3').on('click', function(){
        let iterations = $('#text0').val();
        if(isNaN(iterations)){
            console.log('please enter a number');
        }else {
            counter = iterations - 1;
            loop();
        }
    });
    $('#text0').on('focus', function(){
        $('#text0').css('background', 'pink');
    });
    $('#text0').on('blur',function(){
        $('#text0').css('background', 'white');
    });
    $('#hide').on('click', function(){
        $('#objectToBeActedUpon').fadeToggle();
    });
    $('button').on('mousedown', function(){
        $(this).css('background', 'url("img/zomHead.png")');
    });
    $('button').on('mouseup', function(){
        $(this).css('background', '#333');
    });
    $('button').on('mouseenter', function(){
        $(this).css('background', '#ff82ab');
    });
    $('button').on('mouseleave', function(){
        $(this).css('background', '#333');
    });


});
