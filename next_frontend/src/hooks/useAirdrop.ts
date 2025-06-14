import { useState, useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { confirmSignatureWithLatestBlockhash } from "@/lib/utils";

export function useAirdrop() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const requestAirdrop = useCallback(async () => {
    if (!publicKey) {
      setMessage("❌ 请先连接钱包");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const sig = await connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL);
      setMessage("⏳ 空投请求已发送，等待确认…");
      console.log("Airdrop signature:", sig);
      await confirmSignatureWithLatestBlockhash(connection, sig);
      const balance = await connection.getBalance(publicKey);

      setMessage(`✅ 空投成功！当前余额：${(balance / LAMPORTS_PER_SOL).toFixed(3)} SOL`);
    } catch (e: unknown) {
      console.error("airdrop error", e);
      setMessage(`❌ 空投失败：${getErrorMessage(e)}`);
    } finally {
      setLoading(false);
    }
  }, [connection, publicKey]);

  return { requestAirdrop, loading, message };
}
