import legacyPlugin from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default (mode: string) => {
  return defineConfig({
    server: {
      port: 9001,
    },
    base: '',
    build: {
      outDir: '../../prod',

      rollupOptions: {
        output: {
          // https://github.com/facebook/regenerator/issues/378
          intro: 'window.regeneratorRuntime = undefined;',

          // use a single chunk for inlining
          // https://github.com/rollup/rollup/issues/2756#issuecomment-821838231
          // manualChunks: {},
        },
      },
    },
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
      'process.env.VITE_APP_SERVER_ENV': `"${process.env.VITE_APP_SERVER_ENV}"`,
    },
    plugins: [
      checker({ typescript: true }),
      eslintPlugin(),
      legacyPlugin(),
      reactRefresh(),
      tsconfigPaths(),
    ],
    resolve: {
      dedupe: ['react-i18next'],
      alias: [{ find: '@src', replacement: path.resolve(__dirname, './src') }],
    },
  });
};
