import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/preload/database/schemas/*',
  out: './drizzle',
  dialect: 'sqlite'
})
