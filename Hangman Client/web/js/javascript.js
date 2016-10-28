"use-strict";

$(document).ready(function () {

    $('#principalContainer').hide();

    var numTries = 0,
        length,
        progress = 0;

    // Start game function
    $("#startButton").one("click", function () {

        $.ajax({
            url: "getword.jsp",
            beforeSend: function () {
                $("#startButton>span").replaceWith('<span class="glyphicon glyphicon-refresh gly-spin"></span> Preparing Game');
            },
            success: function (data) {

                $("#startButton").parent().attr("class", "hidden");

                length = getCookie("length");

                for (var a = 0; a < length; a++) {

                    var strID = "wordSpace" + a;
                    $("#wordSpaces").append("<div class='col-lg-1 col-sm-1 text-center' id='" + strID + "'></div>");

                    $("#" + strID).html("<p class='text-center' style='color: white;'>_</p>");

                }

                $("#principalContainer").slideDown(1500);


            }
        });

    });

    function getCookie(cname) {

        var name, ca;
        name = cname + "=";
        ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)===' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }

    $(".btn-group>button").click(function () {

        var letter,
            response;
        letter = $(this).attr("value");

        $(this).removeClass("btn-default");
        $(this).addClass("disabled");
        $(this).attr('disabled','true');

       $.cookie("attempt",letter);

        $.ajax({
            url: "readCookies.jsp",
            beforeSend: function () {
                
            },
            success: function (data) {
                
                var percentage;

                response = eval(getCookie("response"));
                response = response.substring(1, response.length -1);            
                var myArray = response.split(", ");         

                if (myArray[0] !== "" ) {
                    
                    

                    for (var i = 0; i < myArray.length; i++) {
                        
                        progress++;
                        $("button[value='"+letter+"']").addClass("btn-success");                  
                        $("#wordSpace" + myArray[i]).html("<p>" + letter + "</p>");
                        

                    }
                   percentage = progress * 100 / length;
                    $(".progress-bar.progress-bar-striped.active")
                        .attr('aria-valuenow', percentage)
                        .attr('style', "width:" + percentage + "%");

                } else {
                    numTries++;
                    if (numTries <= 7) {
                        $("#imgGame").attr("src", "images/hangman_" + numTries + ".gif");
                    }
                    $("button[value='"+letter+"']").addClass("btn-danger");
                    
                }

                if (numTries >= 7) {
                    percentage =100;

                    $(".progress-bar.progress-bar-striped.active")
                        .removeClass("progress-bar-warning")
                        .addClass("progress-bar-danger")
                        .attr('aria-valuenow', percentage)
                        .attr('style', "width:" + percentage + "%");
                
                word = $.cookie("word");
                
                for(var z=0;z<length;z++){
                                        $("#wordSpace" + z).addClass("text-danger");
                                        $("#wordSpace" + z).html("<p>" + word.substring(z,z+1) + "</p>");
                                       

                                    }
                                    $("#result").append("<h2 class='text-danger text-center'>You lose</h3");
                
                
                } else if (progress == length) {
                    $(".progress-bar.progress-bar-striped.active")
                        .removeClass("progress-bar-warning")
                        .addClass("progress-bar-success");
                
                        $("#result").append("<h2 class='text-success text-center'>You win!</h3");
                
                                    for(var z=0;z<length;z++){
                                        $("#wordSpace" + z).addClass("text-success");

                                    }

                
                }


            }
        });

    });

});