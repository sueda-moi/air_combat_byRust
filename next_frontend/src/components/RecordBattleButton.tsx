"use client";

import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { sendBattleRecord } from "@/lib/sendBattleRecord";
import "./RecordBattleButton.css";

export default function RecordBattleButton() {
  const { connection } = useConnection();
  const { publicKey, signTransaction, signAllTransactions } = useWallet();

  const [loading, setLoading] = useState(false);
  const [txSig, setTxSig] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    if (!publicKey || !signTransaction || !signAllTransactions) {
      setError("请先连接钱包并允许签名权限");
      return;
    }

    setLoading(true);
    setError(null);
    setTxSig(null);

    try {
      const sig = await sendBattleRecord({
        connection,
        wallet: { publicKey, signTransaction, signAllTransactions },
      });
      setTxSig(sig);
    } catch (e: any) {
      console.error(e);
      setError(e?.message ?? "交易失败，请检查控制台");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className="battle-button"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "提交中..." : "提交战斗记录"}
      </button>

      {txSig && (
        <div className="battle-success">
          ✅ 交易成功：{" "}
          <a
            href={`https://solscan.io/tx/${txSig}?cluster=devnet`}
            target="_blank"
            rel="noopener noreferrer"
          >
            查看交易
          </a>
        </div>
      )}

      {error && <div className="battle-error">❌ {error}</div>}
    </div>
  );
}
