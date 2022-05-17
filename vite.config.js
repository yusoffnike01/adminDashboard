import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // add this:
  // server: { 
  //   host: '159.223.41.8'
  // } 
})

