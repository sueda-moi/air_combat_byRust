//! Library crate: exports common modules & GamePlugin
use bevy::prelude::*;

// 公共模块
pub mod components;
pub mod setup;
pub mod core;
pub mod combat; 
pub mod ai;   
// 以后：pub mod combat; pub mod ai; pub mod onchain;

//
// 聚合插件：在 main.rs 里只需 add_plugins(GamePlugin)
//
pub struct GamePlugin;

impl Plugin for GamePlugin {
    fn build(&self, app: &mut App) {
        // Startup 场景初始化
        app.add_systems(Startup, setup::setup);
        app.add_plugins((core::CorePlugin, combat::CombatPlugin, ai::AiPlugin,));

        // 后续再加其他插件，例如：
        // app.add_plugins((
        //     combat::CombatPlugin,
        //     ai::AiPlugin,
        // ));
    }
}
