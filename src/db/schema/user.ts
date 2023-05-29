import { mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { InferModel } from "drizzle-orm";

export const users = mysqlTable("users", {
  userId: varchar("user_id", { length: 255 }).primaryKey(),
  name: text("name").notNull(),
  email: varchar("email", { length: 25 }).notNull(),
  avatarUrl: varchar("avatar_url", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
});

export type User = InferModel<typeof users>;
