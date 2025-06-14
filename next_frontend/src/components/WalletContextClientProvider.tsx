"use client";

import { FC, ReactNode, useMemo, useState, useEffect } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
  UnsafeBurnerWalletAdapter,
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { NETWORKS, NetworkKey } from "@/lib/networks";
import NetworkStatusSwitcher from "../../../backup/NetworkStatusSwitcher";
import "./WalletContextClientProvider.css";

export const WalletContextClientProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [networkKey, setNetworkKey] = useState<NetworkKey>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("selectedNetwork") as NetworkKey) || "local";
    }
    return "local";
  });

  useEffect(() => {
    localStorage.setItem("selectedNetwork", networkKey);
  }, [networkKey]);

  const endpoint = NETWORKS[networkKey].endpoint;

  const wallets = useMemo(
    () => [new UnsafeBurnerWalletAdapter(), new PhantomWalletAdapter()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {/* 顶部状态栏 */}
          <div className="wallet-context-bar">
            <NetworkStatusSwitcher selected={networkKey} onChange={setNetworkKey} />
            <div className="wallet-connection-right">
              <WalletMultiButton />
            </div>
          </div>

          {/* 页面内容 */}
          <main>{children}</main>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
