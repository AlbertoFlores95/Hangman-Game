package Server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import org.json.*;

/**
 *
 * @author Alberto
 */
public class Word {
    
    public JSONObject getRandomWord() {

        JSONObject object = new JSONObject();
        JSONObject response = new JSONObject();

        try {

            try {

                Class.forName("com.mysql.jdbc.Driver");

                String s = "jdbc:mysql://cml.chi.itesm.mx/wad?user=wad&password=p5zVDmq4IGto";
                Connection Con;
                Con = DriverManager.getConnection(s);

                Statement stmt = Con.createStatement();

                String sql = "select * from hangman_word ORDER BY RAND() LIMIT 1";
                ResultSet rs = stmt.executeQuery(sql);

                if (rs.next()) {
                    JSONObject word = new JSONObject();
                    word.put("description", rs.getString("word"));
                    response.put("word", word);
                }
                object.put("response", response);
                
                Con.close();

            } catch (Exception e) {
                object.put("ERROR", e.getMessage());
            }
        } catch (Exception e) {

        }

        return object;
    }
    
}
