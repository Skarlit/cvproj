import java.util.HashMap;
import java.util.Map;

import spark.Request;
import spark.Response;
import spark.ModelAndView;
import spark.template.handlebars.HandlebarsTemplateEngine;

import static spark.Spark.*;


public class Server {

    final static String bootStrapData = "bootStrapData";

    public static String composeHTMLResponse(Request req, Response res) {
        return "Hello";
    }

    public static void main(String[] arg) {
        staticFileLocation("/public");

        Map map = new HashMap();
        map.put(bootStrapData, "{}");
        get("/", (req, res) -> new ModelAndView(map, "index.hbs"), new HandlebarsTemplateEngine());
    }
}
