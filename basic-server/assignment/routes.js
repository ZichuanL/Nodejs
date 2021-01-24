const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment Basic Server</title></head>");
    res.write(
      "<body><h1>Hello</h1><form action='/create-user' method='POST'><input type='text'name='username'><button type='submit'>Submit</button></form></body>"
    );

    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment Basic Server</title></head>");
    res.write(
      "<body><h1>User tab</h1><ul><li>User 1</li></ul><ul><li>User 2</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }

  //   res.write("<html>");
  //   res.write("<head><title>My First Page</title></head>");
  //   res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  //   res.write("</html>");
  //   res.end();
};

module.exports = requestHandler;
