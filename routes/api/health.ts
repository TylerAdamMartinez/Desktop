import { define } from "@/utils.ts";

export const handler = define.handlers((ctx) => {
  return new Response(`Received a ${ctx.req.method} request`);
});
