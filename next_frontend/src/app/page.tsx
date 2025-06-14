"use client";

import "./page.css";
import { AppShell } from "@/components/AppShell/AppShell";
import RecordBattleButton from "@/components/RecordBattleButton";
import { useWallet } from "@solana/wallet-adapter-react";
import AirdropButton from "@/components//AirdropButton/AirdropButton";

export default function HomePage() {
  return (
    <AppShell>
      <PageContent />
    </AppShell>
  );
}

function PageContent() {
  const { publicKey } = useWallet();

  return (
    <div className="page-container">
      <h1 className="page-title">欢迎来到空中战斗 Web3 游戏</h1>
      {publicKey && (
        <div className="wallet-status">
          ✅ 当前连接钱包地址：{publicKey.toBase58()}
        </div>
      )}
      <AirdropButton />
      <RecordBattleButton />
    </div>
  );
}
