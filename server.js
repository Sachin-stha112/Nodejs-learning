import http from "http";
import "dotenv/config";

const server = http.createServer((req, res) => {
    /* Simple ROuting accepting GET req only*/
    try {
        if (req.method === 'GET')
        {
            if (req.url === "/") {
              res.writeHead(200, { "content-type": "text/html" });
              res.end("<h1>Home Page</h1>");
            } else if (req.url === "/about") {
              res.writeHead(200, { "content-type": "text/html" });
              res.end("<h1>ABout Page</h1>");
            } else {
              res.writeHead(404, { "content-type": "text/plain" });
              res.end("Page not found");
            }
        }
        else
        {
            throw new Error("Method not allowed")
        }
    } catch (error) {
        if (error.message === "Method not allowed") {
          res.writeHead(405, { "content-type": "text/plain" });
          res.end("Method not allowed");
        } else {
          res.writeHead(500, { "content-type": "text/plain" });
          res.end("Server Error");
        }
    }


});
/* Using PORT from env or in case missing falling back to port 3000 */
const PORT = process.env.PORT || 3000;
server.listen(PORT);