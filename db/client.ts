import { Pool } from "@db/postgres";

const databaseUrl = Deno.env.get("DATABASE_URL");

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required");
}

export const pool = new Pool(databaseUrl, 10, true);
