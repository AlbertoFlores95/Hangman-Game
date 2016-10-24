<%@page import="client.ConsumeWebService" %>
<%@page import="javax.servlet.http.Cookie" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        
                <%
            ConsumeWebService ws = new ConsumeWebService();
            String word = ws.getWord("http://localhost:8084/hangman/server/");

            Cookie cookieWord = new Cookie("word",word.toUpperCase());
            cookieWord.setMaxAge(3600);
            
            Cookie cookieLength = new Cookie("length", Integer.toString(word.length()));
            cookieLength.setMaxAge(3600);
            
            Cookie cookieAttempt = new Cookie("attempt", null);
            cookieAttempt.setMaxAge(3600);
            
            Cookie cookieAttemptReponse = new Cookie("response", null);
            cookieAttemptReponse.setMaxAge(3600);

            response.addCookie(cookieWord);
            response.addCookie(cookieLength);
            response.addCookie(cookieAttempt);
            response.addCookie(cookieAttemptReponse);

        %>
        
    </body>
</html>
