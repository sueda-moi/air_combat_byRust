"use client";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  UnsafeBurnerWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { useMemo, useEffect, useState, FC, ReactNode } from "react";
import { NETWORKS, NetworkKey } from "@/lib/networks";
import "./AppShell.css";
import SafeWalletMultiButton from "./SafeWalletMultiButton";
import { shortenAddress } from "@/lib/utils";
import { useConnection } from "@solana/wallet-adapter-react";
import {
  useWallet,
} from "@solana/wallet-adapter-react";


export const AppShell: FC<{ children: ReactNode }> = ({ children }) => {
  const [networkKey, setNetworkKey] = useState<NetworkKey>("local");

  useEffect(() => {
    const stored = localStorage.getItem("selectedNetwork");
    if (stored && ["local", "devnet", "mainnet"].includes(stored)) {
      setNetworkKey(stored as NetworkKey);
    }
  }, []);

  const endpoint = NETWORKS[networkKey].endpoint;
  const wallets = useMemo(() => [
    new UnsafeBurnerWalletAdapter(),
    new PhantomWalletAdapter(),
  ], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <ShellHeader networkKey={networkKey} setNetworkKey={setNetworkKey} />
          <main>{children}</main>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};


const ShellHeader = ({
  networkKey,
  setNetworkKey,
}: {
  networkKey: NetworkKey;
  setNetworkKey: (key: NetworkKey) => void;
}) => {
  const network = NETWORKS[networkKey];
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [sol, setSol] = useState<number | null>(null);

  useEffect(() => {
    if (publicKey) {
      connection.getBalance(publicKey).then((lamports) => {
        setSol(lamports / 1e9);
      });
    }
  }, [publicKey, connection]);

  const copy = () =>
    publicKey && navigator.clipboard.writeText(publicKey.toBase58());

  return (
    <header className="app-header">
      <div className="app-header-left">
        <label htmlFor="network-select">🌐 当前网络：</label>
        <select
          id="network-select"
          value={networkKey}
          onChange={(e) => {
            const key = e.target.value as NetworkKey;
            setNetworkKey(key);
            localStorage.setItem("selectedNetwork", key);
            window.location.reload();
          }}
          className="network-select"
        >
          {Object.entries(NETWORKS).map(([key, net]) => (
            <option key={key} value={key}>
              {net.label}
            </option>
          ))}
        </select>
        <span className="network-rpc">
          🧭 RPC 地址：<code>{network.endpoint}</code>
        </span>
      </div>

      <div className="wallet-display">
        {publicKey && (
          <div className="wallet-info">
            <span>{shortenAddress(publicKey.toBase58())}</span>
            <button onClick={copy} className="copy-button">📋</button>
            {sol !== null && <span className="wallet-balance">{sol.toFixed(2)} ◎</span>}
          </div>
        )}
        <SafeWalletMultiButton />
      </div>
    </header>
  );
};
