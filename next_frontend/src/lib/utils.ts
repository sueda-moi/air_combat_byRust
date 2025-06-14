import { Connection } from "@solana/web3.js";

/**
 * 使用最新区块信息确认交易
 * @param connection Solana 链连接对象
 * @param signature 交易签名字符串
 * @returns Promise<void>
 */
export async function confirmSignatureWithLatestBlockhash(
  connection: Connection,
  signature: string
): Promise<void> {
  const { blockhash, lastValidBlockHeight } =
    await connection.getLatestBlockhash();

  await connection.confirmTransaction(
    {
      signature,
      blockhash,
      lastValidBlockHeight,
    },
    "confirmed" // 可选，默认也是 confirmed
  );
}


/**
 * 简化地址显示，保留前后指定数量的字符
 * @param address 完整的 Solana 地址
 * @param pad 前后保留的字符数，默认 4
 * @returns 简化后的地址字符串
 */
export function shortenAddress(address: string, pad = 4) {
  return `${address.slice(0, pad)}..${address.slice(-pad)}`;
}
