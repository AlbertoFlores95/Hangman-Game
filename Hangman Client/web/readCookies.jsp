<%@page contentType="application/json" pageEncoding="UTF-8"%>
<%@page import="client.ConsumeWebService" %>
<%@page import="javax.servlet.http.Cookie" %>
        <%

            ConsumeWebService ws = new ConsumeWebService();
            Cookie cookie = null;
            String word ="", letter ="";
            Cookie[] cookies = null;
            // Get an array of Cookies associated with this domain
            cookies = request.getCookies();
            if (cookies != null) {
                
                for (int i = 0; i < cookies.length; i++) {
                    cookie = cookies[i];
                    if (cookie.getName().equals("word")) {
                        word = cookie.getValue();
                    } else if (cookie.getName().equals("attempt")) {
                        letter = cookie.getValue();

                    }
                    
                }
                
                out.println(ws.checkWord(word, letter));
                
                Cookie cookieAttemptReponse = new Cookie("response", ws.checkWord(word, letter).toString());
            cookieAttemptReponse.setMaxAge(3600);

            response.addCookie(cookieAttemptReponse);
                               
            }

        %>