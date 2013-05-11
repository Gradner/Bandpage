var song = document.getElementById("player");

$(function() {
    $(".playback").click(function(e) {
        e.preventDefault();
        $("#songname").fadeToggle("slow")
        var song = document.getElementById("player");
        if (song.paused){
            song.play();
            $("#play").attr("src", "../images/pause-up.jpg");
        }else {
            song.pause();
            $("#play").attr("src", "../images/play-up.jpg");
        }
    });

    $(".playback").mouseenter(function() {
        var song = document.getElementById("player");
        if (song.paused){
            $("#play").attr("src", "../images/play-down.jpg");
        } else {
            $("#play").attr("src", "../images/pause-down.jpg");
        }
    }).mouseleave(function(){
        var song = document.getElementById("player");
        if (song.paused){
            $("#play").attr("src", "../images/play-up.jpg");
        } else {
            $("#play").attr("src", "../images/pause-up.jpg");
        }
    });
});