import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to https://<user>.github.io/  (a "user site" repo named
// NPriyankaDS.github.io), keep base as '/'. If you ever move this into a
// project repo instead (https://<user>.github.io/<repo>/), change base to
// '/<repo>/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
