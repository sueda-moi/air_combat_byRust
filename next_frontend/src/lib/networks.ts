export const NETWORKS = {
  local: {
    label: "Localnet",
    endpoint: "http://127.0.0.1:8899",
  },
  devnet: {
    label: "Devnet",
    endpoint: "https://api.devnet.solana.com",
  },
  mainnet: {
    label: "Mainnet",
    endpoint: "https://api.mainnet-beta.solana.com",
  },
};

export type NetworkKey = keyof typeof NETWORKS;
