"use client";

import { useAirdrop } from "@/hooks/useAirdrop";
import { useManualTransfer } from "@/hooks/useManualTransfer";
import { useWallet } from "@solana/wallet-adapter-react";
import "./AirdropButton.css";

export default function AirdropButton() {
  const { requestAirdrop, loading: airdropLoading, message } = useAirdrop();
  const { publicKey } = useWallet();
  const {
    transfer,
    loading: transferLoading,
    error: transferError,
    success: transferSuccess,
  } = useManualTransfer();

  const handleManualTransfer = () => {
    if (publicKey) {
      transfer(publicKey.toBase58(), 1);
    }
  };

  return (
    <div className="airdrop-wrapper">
      {/* 主空投按钮 */}
      <button
        className="airdrop-button"
        onClick={requestAirdrop}
        disabled={airdropLoading}
      >
        {airdropLoading ? "领取中…" : "一键领取 1 SOL 空投"}
      </button>

      {/* 空投结果信息 */}
      {message && <p className="airdrop-msg">{message}</p>}

      {/* 如果空投失败，显示备用转账方案 */}
      {message?.includes("failed") && publicKey && (
        <div className="manual-transfer-box">
          <button
            className="manual-transfer-button"
            onClick={handleManualTransfer}
            disabled={transferLoading}
          >
            {transferLoading ? "转账中…" : "使用当前钱包转账 1 SOL"}
          </button>
          {transferError && (
            <p className="airdrop-error">❌ 转账失败：{transferError}</p>
          )}
          {transferSuccess && (
            <p className="airdrop-success">✅ 转账成功！</p>
          )}
        </div>
      )}
    </div>
  );
}
