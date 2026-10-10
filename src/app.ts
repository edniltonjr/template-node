import { createServer, type Server } from "node:http";

export interface AppConfig {
  name: string;
}

export function createApp(config: AppConfig): Server {
  return createServer((req, res) => {
    const url = new URL(req.url ?? "/", "http://localhost");

    if (url.pathname === "/health") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ status: "ok" }));
      return;
    }

    if (url.pathname === "/") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ app: config.name }));
      return;
    }

    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "not found" }));
  });
}
