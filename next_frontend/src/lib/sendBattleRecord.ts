import { Connection, PublicKey, SystemProgram } from "@solana/web3.js";
import { AnchorProvider, Program, Idl, Wallet } from "@coral-xyz/anchor";
import IDL from "@/idl/battle_record.json" assert { type: "json" };

// 合约 ID
const PROGRAM_ID = new PublicKey("6THjAp4TKcGdJF28Sd8fpP6vRA2acZadjjqdvCYH4JoN");

export const sendBattleRecord = async ({
  connection,
  wallet,
}: {
  connection: Connection;
  wallet: Wallet;
}): Promise<string> => {
  const provider = new AnchorProvider(connection, wallet, {
    commitment: "confirmed",
  });

  const program = new Program(IDL as Idl, provider);

  // ✅ Derive PDA for record
  const [recordPda, bump] = PublicKey.findProgramAddressSync(
    [Buffer.from("record"), wallet.publicKey.toBuffer()],
    PROGRAM_ID
  );


  console.log("📦 record PDA:", recordPda.toBase58());
  console.log("📦 bump:", bump);

  const txSig = await program.methods
    .recordResult(true) // 参数只接受 bool
    .accounts({
      record: recordPda,
      player: wallet.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .rpc();

  return txSig;
};
