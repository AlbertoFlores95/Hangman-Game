<%-- 
    Document   : index
    Created on : Oct 22, 2016, 1:50:51 PM
    Author     : Alberto
--%>

<%@page contentType="application/json" pageEncoding="UTF-8"%>
<%=(new Server.Word().getRandomWord().toString())%>