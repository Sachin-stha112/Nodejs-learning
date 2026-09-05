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

const server = http.createServer((req, res) => {
  // Only allow GET requests
  if (req.method !== "GET") {
    res.writeHead(405, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: "Method Not Allowed",
      }),
    );

    return;
  }

  // GET /api/users
  if (req.url === "/api/users") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(users));

    return;
  }

  // GET /api/users/:id
  if (req.url.startsWith("/api/users/")) {
    // Get the ID from the URL
    const id = req.url.split("/")[3];

    // Convert string ID to number
    const userId = Number(id);

    // Search for the user
    const user = users.find((user) => Number(user.id) === userId);

    // If user doesn't exist
    if (!user) {
      res.writeHead(404, {
        "Content-Type": "application/json",
      });

      res.end(
        JSON.stringify({
          message: "User not found",
        }),
      );

      return;
    }

    // User exists
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(user));

    return;
  }

  // Route doesn't exist
  res.writeHead(404, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      message: "Route not found",
    }),
  );
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
    