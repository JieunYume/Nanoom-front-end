/// <reference types="vitest" />
import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
// 다른 기기에서도 접속 할 수 있도록(폰으로 들어가보고 싶어서!!)
  server: {
    host: '0.0.0.0',   // 🔥 이 부분이 핵심!
    port: 5173,         // 원하는 포트, 예: 3000
  },

  plugins: [
    svgr(),
    react({
      jsxImportSource: "@emotion/react"
    }),
    tsconfigPaths(),
  ],
  test: {
    include: ['**/*.test.{ts,tsx}'],
    globals: true,
    environment: 'jsdom'
  },
} as UserConfig);
