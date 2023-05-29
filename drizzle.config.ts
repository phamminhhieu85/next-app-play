import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  connectionString: process.env.DATABASE_URL,
  schema: "./src/db/schema/*",
  out: "./migration_folders",
} satisfies Config;
