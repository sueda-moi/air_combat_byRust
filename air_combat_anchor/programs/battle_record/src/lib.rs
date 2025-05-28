use anchor_lang::prelude::*;


declare_id!("6THjAp4TKcGdJF28Sd8fpP6vRA2acZadjjqdvCYH4JoN"); //repalce with your program ID

#[program]
pub mod battle_record {
    use super::*;

    pub fn record_result(ctx: Context<RecordResult>, win: bool) -> Result<()> {
        let record = &mut ctx.accounts.record;
        record.player = *ctx.accounts.player.key;
        record.win = win;
        record.timestamp = Clock::get()?.unix_timestamp;
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction()]
pub struct RecordResult<'info> {
    #[account(
        init_if_needed,
        payer = player,
        space = 8 + 32 + 1 + 8, // Discriminator + Pubkey + bool + timestamp
        seeds = [b"record", player.key().as_ref()],
        bump
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
    pub timestamp: i64,
}
