// frontend/src/js_bridge.ts
import { Connection, Transaction } from "@solana/web3.js";
import init, { sign_and_send_transaction } from "@wasm/wasm_bridge";

// ✅ 构建时 @/wasm 指向 vite.config.ts 中的 alias
// ✅ wasm 文件本身通过静态路径传入，兼容 dev 和 build
const wasm_url = new URL("/wasm_bridge/wasm_bridge_bg.wasm", import.meta.url);

// 1. 暴露函数给 Rust 调用（通过 `wasm_bindgen` 的 extern module）
declare global {
  interface Window {
    solana?: any;
    signAndSendTransaction?: (serializedTx: Uint8Array) => Promise<string>;
  }
}

window.signAndSendTransaction = async function (serializedTx: Uint8Array): Promise<string> {
  if (!window.solana) {
    console.warn("🛑 Solana 钱包未安装！");
    return "Wallet not available";
  }

  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  const tx = Transaction.from(serializedTx);
  const { signature } = await window.solana.signAndSendTransaction(tx);
  await connection.confirmTransaction(signature, "confirmed");
  return signature;
};

// 2. 初始化 wasm，并进行一次调用测试
async function initWasmAndTest() {
  await init(wasm_url); // 加载 .wasm 文件
  const result = await sign_and_send_transaction(new Uint8Array([1, 2, 3]));
  console.log("✅ WASM 调用成功，签名结果：", result);
}

initWasmAndTest();
