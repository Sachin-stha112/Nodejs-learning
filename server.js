import http from "http";
import "dotenv/config";

const server = http.createServer((req, res) => {
    /* Simple ROuting */
    if(req.url === '/')
    {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Home Page</h1>");
    }
    else if(req.url === '/about')
    {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>ABout Page</h1>");
    }
    else
    {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Page not found");
    }


});
/* Using PORT from env or in case missing falling back to port 3000 */
const PORT = process.env.PORT || 3000;
server.listen(PORT);
