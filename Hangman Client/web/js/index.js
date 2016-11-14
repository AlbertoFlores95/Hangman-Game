"use strict";

var numTries = 0,
    progress = 0,
    length;

var gamesWon = $.cookie("gamesWon"),
    gamesLost = parseInt($.cookie("gamesLost")),
    gamesPlayed = parseInt($.cookie("gamesPlayed"));

$(document).ready(function () {

    if ($.cookie('gamesWon') === undefined) {
        gamesWon = 0;
    }
    if ($.cookie('gamesLost') === undefined) {
        gamesLost = 0;
    }
    if ($.cookie('gamesPlayed') === undefined) {
        gamesPlayed = 0;
    }

    checkGamesPlayed();

});

$(document).on('click', 'button[value="init"]', function () {

    $(document).on('click', ".btn-group>button",game);

    var id = $(this).attr("id");

    numTries = 0;
    progress = 0;
    length = 0;

    $.ajax({
        url: "getword.jsp",
        beforeSend: function () {
            $("#" + id + ">span").replaceWith('<span class="glyphicon glyphicon-refresh gly-spin"></span> Preparing Game');
        },
        error: function () {
            alert("Disconnected from server");
        },
        success: function () {

            gamesPlayed++;
            $.cookie("gamesPlayed", gamesPlayed);

            $("#startButton").slideUp('slow', function () {

                length = $.cookie("length");
                var htmlGame = '<div class="row"><div id="result" class="col-sm-12 col-sm-push-0 col-md-10 col-md-push-1"><br><div class="progress"> <div class="progress-bar progress-bar-striped active progress-bar-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0" style="width:0"></div></div></div></div><div class="row"> <div class="col-sm-12 col-sm-push-0 col-md-6 col-md-push-0"> <div class="row center-block"> <div class="col-sm-12 col-sm-push-1 text-center col-centered"><img class="center-block" id="imgGame" src="images/hangman_0.gif"> </div><div id="wordSpaces" class="col-sm-12 col-sm-push-1 text-center"> </div></div></div><div class="col-sm-12 col-sm-push-0 col-md-5 col-md-push-0"> <div class="row"> <div class="col-sm-12 col-sm-push-1 text-center"> <div class="row"><br><br><div class="col-sm-12"> <div class="btn-group btn-group-lg btn-group-justified"> <div class="btn-group"> <button value="A" class="btn btn-default">A</button> </div><div class="btn-group"> <button value="B" class="btn btn-default">B</button> </div><div class="btn-group"> <button value="C" class="btn btn-default">C</button> </div><div class="btn-group"> <button value="D" class="btn btn-default">D</button> </div><div class="btn-group"> <button value="E" class="btn btn-default">E</button> </div><div class="btn-group"> <button value="F" class="btn btn-default">F</button> </div><div class="btn-group"> <button value="G" class="btn btn-default">G</button> </div><div class="btn-group"> <button value="H" class="btn btn-default">H</button> </div><div class="btn-group"> <button value="I" class="btn btn-default">I</button> </div></div><br><br><div class="btn-group btn-group-lg btn-group-justified"> <div class="btn-group"> <button value="J" class="btn btn-default">J</button> </div><div class="btn-group"> <button value="K" class="btn btn-default">K</button> </div><div class="btn-group"> <button value="L" class="btn btn-default">L</button> </div><div class="btn-group"> <button value="M" class="btn btn-default">M</button> </div><div class="btn-group"> <button value="N" class="btn btn-default">N</button> </div><div class="btn-group"> <button value="Ñ" class="btn btn-default">Ñ</button> </div><div class="btn-group"> <button value="O" class="btn btn-default">O</button> </div><div class="btn-group"> <button value="P" class="btn btn-default">P</button> </div><div class="btn-group"> <button value="Q" class="btn btn-default">Q</button> </div></div><br><br><div class="btn-group btn-group-lg btn-group-justified"> <div class="btn-group"> <button value="R" class="btn btn-default">R</button> </div><div class="btn-group"> <button value="S" class="btn btn-default">S</button> </div><div class="btn-group"> <button value="T" class="btn btn-default">T</button> </div><div class="btn-group"> <button value="U" class="btn btn-default">U</button> </div><div class="btn-group"> <button value="V" class="btn btn-default">V</button> </div><div class="btn-group"> <button value="W" class="btn btn-default">W</button> </div><div class="btn-group"> <button value="X" class="btn btn-default">X</button> </div><div class="btn-group"> <button value="Y" class="btn btn-default">Y</button> </div><div class="btn-group"> <button value="Z" class="btn btn-default">Z</button> </div></div><br><br></div></div></div></div></div></div>';
                var htmlButton = '<button id="restartButton" value="init" class="btn btn-sm btn-primary " type="submit"><span><span class="glyphicon glyphicon-refresh"></span> Try New Word</span></button>';

                $("#gameSpace").parent().slideUp();
                $("#gameSpace").html(htmlGame);

                $("#restartSpace").html(htmlButton);

                for (var a = 0; a < length; a++) {

                    var strID = "space" + a;

                    $("#wordSpaces").append("<div class='col-sm-1 text-center' ' id='" + strID + "'>&nbsp</div>"
                    );

                }

                $("#gameSpace").parent().slideDown(1500);

            });

        }
    });

});

function game() {

    var letter = $(this).attr("value"),
        response;

    $(this)
        .removeClass("btn-default")
        .addClass("disabled")
        .attr('disabled', 'true');

    $.cookie("attempt", letter);

    $.ajax({
        url: "readCookies.jsp",
        error: function () {
            alert("Disconnected from server");
        },
        success: function () {

            var percentage;

            response = eval($.cookie("response"));

            if (response.length !== 0) {

                for (var i = 0; i < response.length; i++) {

                    progress++;
                    $("button[value='" + letter + "']").addClass("btn-success");
                    $("#space" + response[i]).html(letter);

                }
                percentage = progress * 100 / length;
                $(".progress-bar.progress-bar-striped.active")
                    .attr('aria-valuenow', percentage)
                    .attr('style', "width:" + percentage + "%");

                if (progress == length) {

                    gamesWon++;
                    $.cookie("gamesWon",gamesWon);
                    checkGamesPlayed();

                    $(document).off('click', ".btn-group>button",game);

                    $(".progress-bar.progress-bar-striped.active")
                        .removeClass("progress-bar-warning")
                        .addClass("progress-bar-success");

                    $("#result").append("<h2 class='text-success text-center'>You win!</h3");

                    for (var z = 0; z < length; z++) {
                        $("#space" + z).addClass("text-success");
                    }

                }

            } else {
                numTries++;
                if (numTries <= 6) {
                    $("#imgGame").attr("src", "images/hangman_" + numTries + ".gif");
                } else {

                    gamesLost++;
                    $.cookie("gamesLost",gamesLost);
                    checkGamesPlayed();

                    $("#imgGame").attr("src", "images/hangman_7.gif");
                    $(document).off('click', ".btn-group>button",game);

                    percentage = 100;

                    $(".progress-bar.progress-bar-striped.active")
                        .removeClass("progress-bar-warning")
                        .addClass("progress-bar-danger")
                        .attr('aria-valuenow', percentage)
                        .attr('style', "width:" + percentage + "%");

                    var word = $.cookie("word");

                    for (var y = 0; y < length; y++) {
                        $("#space" + y)
                            .addClass("text-danger")
                            .text(word.substring(y, y + 1));
                    }

                    $("#result").append("<h2 class='text-danger text-center'>You lose</h3");
                }

                $("button[value='" + letter + "']").addClass("btn-danger");

            }

        }
    });

}

function checkGamesPlayed(){
    $("#gamesWon").text(gamesWon);
    $("#gamesLost").text(gamesLost);
    $("#gamesUnfinished").text(gamesPlayed - gamesWon - gamesLost);

}
