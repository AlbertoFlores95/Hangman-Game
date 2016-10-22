package client;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import org.json.*;


/**
 *
 * @author Alberto
 */
public class ConsumeWebService {
 
    public String getWord(String url) {
        String word;

        try {

            JSONObject json = new JSONObject(getUrlContents(url));
            JSONObject response = (JSONObject) (json.get("response"));
            JSONObject randomWord = (JSONObject) response.get("word");
            word = randomWord.getString("description");
            

        } catch (JSONException e) {
            word = e.getMessage();
        }

        return word;
    }
    
    private String getUrlContents(String theUrl) {
        StringBuilder content = new StringBuilder();

        // many of these calls can throw exceptions, so i've just
        // wrapped them all in one try/catch statement.
        try {
            // create a url object
            URL url = new URL(theUrl);

            // create a urlconnection object
            URLConnection urlConnection = url.openConnection();

            // wrap the urlconnection in a bufferedreader
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));

            String line;

            // read from the urlconnection via the bufferedreader
            while ((line = bufferedReader.readLine()) != null) {
                content.append(line + "\n");
            }
            bufferedReader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return content.toString();
        
    }
}
