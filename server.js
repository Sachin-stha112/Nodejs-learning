import http from "http";
import "dotenv/config";

const server = http.createServer((req, res) => {
  res.end("<h1>Hello how is weather World</h1>");
});
/* Using PORT from env or in case missing falling back to port 3000 */
const PORT = process.env.PORT || 3000;
server.listen(PORT);
