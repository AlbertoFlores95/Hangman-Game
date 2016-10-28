<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="client.ConsumeWebService" %>
<%@page import="javax.servlet.http.Cookie" %>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Hangman</title>

    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="css/index.css" rel="stylesheet" type="text/css"/>

</head>
<body>

    <div class="titlediv">
        <h1 class="text-center">
            <span>
                <img src="images/stickFigure.png" style="width: 100px" height="150px">
            </span>
            Hangman</h1>
    </div>

    <div style="height: 500px; text-align:center;line-height:200px;">
        <button id="startButton" class="btn btn-lg btn-primary " type="submit">
            <span><span class="glyphicon glyphicon-play"></span> Start Game</span>
        </button>
    </div>


    <div id="principalContainer" class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-content">

                        <div class="row">

                            <div class="row" id="result">
                                <div class="col-sm-12">
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped active progress-bar-warning"
                                             role="progressbar"
                                             aria-valuenow="0" aria-valuemin="0" aria-valuemax="0" style="width:0%">

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Image Div -->
                            <div class="col-lg-4 col-lg-offset-1">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <img class="center-block" id="imgGame" src="images/hangman_0.gif">
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="center-letters">
                                            <div class="row" id="wordSpaces">
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">

                                <!--Buttons Div-->
                                <div class="row">

                                    <br>
                                    <br>

                                    <div class="col-sm-12">

                                        <div class="btn-group btn-group-lg btn-group-justified">
                                            <div class="btn-group">
                                                <button value="A" class="btn btn-default">A</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="B" class="btn btn-default">B</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="C" class="btn btn-default">C</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="D" class="btn btn-default">D</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="E" class="btn btn-default">E</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="F" class="btn btn-default">F</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="G" class="btn btn-default">G</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="H" class="btn btn-default">H</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="I" class="btn btn-default">I</button>
                                            </div>

                                        </div>

                                        <br>
                                        <br>

                                        <div class="btn-group btn-group-lg btn-group-justified">
                                            <div class="btn-group">
                                                <button value="J" class="btn btn-default">J</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="K" class="btn btn-default">K</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="L" class="btn btn-default">L</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="M" class="btn btn-default">M</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="N" class="btn btn-default">N</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="Ñ" class="btn btn-default">Ñ</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="O" class="btn btn-default">O</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="P" class="btn btn-default">P</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="Q" class="btn btn-default">Q</button>
                                            </div>

                                        </div>

                                        <br>
                                        <br>

                                        <div class="btn-group btn-group-lg btn-group-justified">
                                            <div class="btn-group">
                                                <button value="R" class="btn btn-default">R</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="S" class="btn btn-default">S</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="T" class="btn btn-default">T</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="U" class="btn btn-default">U</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="V" class="btn btn-default">V</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="W" class="btn btn-default">W</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="X" class="btn btn-default">X</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="Y" class="btn btn-default">Y</button>
                                            </div>
                                            <div class="btn-group">
                                                <button value="Z" class="btn btn-default">Z</button>
                                            </div>

                                        </div>

                                        <br>
                                        <br>

                                    </div>

                                </div>


                            </div>

                        </div>

                        <br>

                    </div>

                </div>
            </div>
        </div>
    </div>

    <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="js/javascript.js" type="text/javascript"></script>
    <script src="js/jquery.cookie.js" type="text/javascript"></script>
</body>
</html>