<%-- 
    Document   : index
    Created on : Oct 22, 2016, 2:06:19 PM
    Author     : Alberto
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="client.ConsumeWebService" %>
<%@page import="javax.servlet.http.Cookie" %>

<!DOCTYPE html>
<html>
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Hangman</title>
    </head>
    
    <body>
        
        <div class="container-fluid">
            <div class="jumbotron">
                <h1>HangMan</h1>
            </div>
        </div>

        <input type="button" value="check" onclick="checkCookie()"></input>

        <%
            ConsumeWebService ws = new ConsumeWebService();
            String word = ws.getWord("http://localhost:8084/hangman/server/");

            Cookie myCookie = new Cookie("word", word);
            myCookie.setMaxAge(3600);
            response.addCookie(myCookie);

        %>
        
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/javascript.js" type="text/javascript"></script>
        
    </body>
</html>