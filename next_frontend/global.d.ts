import type { Wallet } from "@project-serum/anchor";

declare global {
  interface Window {
    solana?: Wallet;
  }
}
