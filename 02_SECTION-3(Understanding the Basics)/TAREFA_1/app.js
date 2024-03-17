const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Server is running");
    const { url } = req;

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<p>Hello from the / route</p>");
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
        );
        return res.end();
    }

    if (url === "/users") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<ul>");
        for (let i = 0; i < 5; i++) {
            res.write(`<li>User ${i + 1}</li>`);
        }
        res.write("</ul>");
        return res.end();
    }

    if (url === "/create-user" && req.method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split("=")[1];
            console.log(username);
        });

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
});

server.listen(3000);
