const http = require("http");

const PORT = Number(process.env.PORT) || 8090;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello from GCP Marketplace POC");
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
