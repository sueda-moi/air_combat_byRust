cd frontend
npx vite build
cd ..
wasm-pack build wasm_bridge --target web
