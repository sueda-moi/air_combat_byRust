// frontend/src/js_bridge.ts
import { Connection, Transaction } from "@solana/web3.js";

declare global {
  interface Window {
    solana: any;
    signAndSendTransaction: (serializedTx: Uint8Array) => Promise<string>;
  }
}

window.signAndSendTransaction = async function (serializedTx: Uint8Array): Promise<string> {
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  const tx = Transaction.from(serializedTx);
  const { signature } = await window.solana.signAndSendTransaction(tx);
  await connection.confirmTransaction(signature, "confirmed");
  return signature;
};
