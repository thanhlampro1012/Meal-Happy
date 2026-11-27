import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const notebooks = sqliteTable('notebooks', {
  userId: text('user_id').primaryKey(),
  stateJson: text('state_json').notNull(),
  revision: integer('revision').notNull().default(1),
  updatedAt: text('updated_at').notNull(),
});

export const mapsRateLimits = sqliteTable('maps_rate_limits', {
  userId: text('user_id').primaryKey(),
  windowStart: integer('window_start').notNull(),
  requestCount: integer('request_count').notNull().default(0),
});
