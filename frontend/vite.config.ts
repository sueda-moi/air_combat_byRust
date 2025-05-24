import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/js_bridge.ts'),
      formats: ['es'],
      fileName: () => 'js_bridge.js',
    },
    outDir: path.resolve(__dirname, '../dist'), // 输出到主目录的 dist
    emptyOutDir: false, // 不清空 dist（避免删掉其他 wasm 文件）
  }
});
