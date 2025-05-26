use anchor_lang::prelude::*;

declare_id!("11111111111111111111111111111111");

#[program]
pub mod battle_record {
    use super::*;

    pub fn record(ctx: Context<StoreRecord>, win: bool) -> Result<()> {
        let record = &mut ctx.accounts.record;
        record.player = *ctx.accounts.player.key;
        record.win = win;
        record.ts = Clock::get()?.unix_timestamp;
        msg!("🎯 Battle result stored: player={}, win={}, ts={}", record.player, record.win, record.ts);
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(win: bool)]
pub struct StoreRecord<'info> {
    #[account(
        init_if_needed,
        seeds = [b"rec", player.key().as_ref()],
        bump,
        payer = player,
        space = 8 + 32 + 1 + 8, // discriminator + Pubkey + bool + i64
    )]
    pub record: Account<'info, Record>,

    #[account(mut)]
    pub player: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Record {
    pub player: Pubkey,
    pub win: bool,
    pub ts: i64,
}
