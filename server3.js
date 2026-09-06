import http from "http";

const PORT = 8000;

const users = [
  {
    id: 1,
    name: "Sachin",
    email: "sachin@example.com",
  },
  {
    id: 2,
    name: "Ram",
    email: "ram@example.com",
  },
  {
    id: 3,
    name: "Sita",
    email: "sita@example.com",
  },
];

/* Logger Middleware*/
const logger = (req,res,next) => 
{
    console.log(`${req.method}  ${req.url}`);
    next();
}
/* JSON Middleware: Set's Content-TYpe to application/json */
const jsonMiddleware = (req, res, next) =>
{
    res.setHeader("Content-Type" , "application/json")
    next();
}

/* Now setting up the handlers */



const getUsersHandler = (req, res) =>
{
    res.statusCode = 200
    res.end (JSON.stringify(users))
}

const userNotFoundHandler = (req,res) =>
{
    res.statusCode = 404
    res.end(JSON.stringify({
        message : "User Not Found"
    }))
}

const getUserByIdHandler = (req,res) =>
{
    const id = req.url.split("/")[3]
    const userId = Number(id) /* String to number */
    const user = users.find((user) => Number(user.id) === userId)

    if(!user)
    {
        userNotFoundHandler(req,res);
    }
    else
    {
        res.statusCode = 200
        res.end(JSON.stringify(user))
    }
}

const routeNotFoundHandler = (req, res) =>
{
    res.statusCode = 404
    res.end(JSON.stringify({
        message : "Route not found"
    }))
}
/* Handler for post methods */
const createUserHandler = (req, res) => {
    let body = '';
    /* Listen for data */
    req.on('data', (chunk) => {
        body += chunk.toString();
    })
    /* Completed Listening */
    req.on('end', () => {
        const newUser = JSON.parse(body)
        users.push(newUser)
        res.statusCode = 201
        res.end(JSON.stringify(newUser))
    })
}

/* Creating Server */
const server = http.createServer ((req, res) => {
    logger(req, res, () => {
        jsonMiddleware (req, res, () => {
            if(req.url === "/api/users" && req.method === 'POST')
            {
                createUserHandler(req,res)
            }
            else if(req.url === "/api/users" && req.method === 'GET')
            {
                getUsersHandler(req,res)
            }
            else if(req.url.startsWith("/api/users/") && req.method === 'GET')
            {
                getUserByIdHandler(req,res)
            }
            else 
            {
                routeNotFoundHandler(req, res)
            }
        })
    })
})
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});