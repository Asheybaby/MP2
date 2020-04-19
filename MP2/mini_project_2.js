$(document).ready(function(){

    var audio1 = document.createElement('audio');
        audio1.setAttribute('src', 'D.wav');


    $(".yellow_square").click(function () {

        audio1.play();
        $(this).fadeOut();
        $(".heart1").slideToggle("slow");
        $(".heart2").slideToggle("slow");
        $(".heart3").slideToggle("slow");
        $(".heart4").slideToggle("slow");


    });







});