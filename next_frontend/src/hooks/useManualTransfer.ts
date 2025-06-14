import { useCallback, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { SystemProgram, Transaction, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { confirmSignatureWithLatestBlockhash } from "@/lib/utils";

/**
 * 用于 fallback 的手动转账 Hook（默认发送 1 SOL 到目标地址）
 */
export function useManualTransfer() {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const transfer = useCallback(async (toAddress: string, amountSol = 1) => {
        if (!publicKey) {
            setError("钱包未连接");
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const toPubkey = new PublicKey(toAddress);
            const tx = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey,
                    lamports: amountSol * LAMPORTS_PER_SOL,
                })
            );

            const signature = await sendTransaction(tx, connection);
            await confirmSignatureWithLatestBlockhash(connection, signature);

            setSuccess(true);
        } catch (err: unknown) {
            console.error("❌ 手动转账失败：", err);
            setError(getErrorMessage(err));

        } finally {
            setLoading(false);
        }
    }, [connection, publicKey, sendTransaction]);

    return { transfer, loading, error, success };
}
