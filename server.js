import http from "http";
import "dotenv/config";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer(async (req, res) => {
    
  /* Only GET Method allowed*/
  try
  {
    if(req.method === 'GET')
    {
      let filePath;
      /* Routing */
      if(req.url === '/')
      {
        filePath = path.join(__dirname, "public", "home.html")
      }
      else if(req.url === '/about')
      {
        filePath = path.join(__dirname, "public", "about.html")
      }
      else
      {
        res.writeHead(404, {
          "Content-Type" : "text/plain"
        });
        res.end("Page not found")
        return;
      }
      /* Reading Html file*/
      const data = await fs.readFile(filePath);
      res.writeHead(200, {
        "Content-Type" : "text/html"
      });
      res.end(data)
    }
    else 
    {
      throw new Error("Method not allowed")
    }
  }
  catch(error)
  {
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