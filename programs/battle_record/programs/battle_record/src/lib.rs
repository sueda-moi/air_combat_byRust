use anchor_lang::prelude::*;

declare_id!("GfD7dmvutPGvd19ppB45ijzhLDu14oCwMCzWDBodaRM");

#[program]
pub mod battle_record {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
