import { createApp } from "./app.ts";

const port = Number(process.env.PORT ?? 3000);
const server = createApp({ name: process.env.APP_NAME ?? "__APP_NAME__" });

server.listen(port, () => console.log(`listening on :${port}`));

// docker stop envia SIGTERM: encerra conexões e sai antes do SIGKILL.
for (const signal of ["SIGTERM", "SIGINT"] as const) {
  process.once(signal, () => server.close(() => process.exit(0)));
}
