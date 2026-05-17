import { App, staticFiles } from "fresh";
import { type State } from "@/utils.ts";

export const app = new App<State>();

app.use(staticFiles());

// Pass a shared value from a middleware
app.use(async (ctx) => {
  ctx.state.shared = "hello";
  return await ctx.next();
});

app.use((ctx) => {
  const { config, url, req, params, state, error } = ctx;

  console.log({ config, url, req, params, state, error });

  return ctx.next();
});

// this is the same as the /api/:name route defined via a file. feel free to delete this!
app.get("/api2/:name", (ctx) => {
  const name = ctx.params.name;
  return new Response(
    `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`,
  );
});

app.notFound(() => {
  return new Response("Not Found", { status: 404 });
});

// Include file-system based routes here
app.fsRoutes();
