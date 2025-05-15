//! Library crate: exports common modules & GamePlugin
use bevy::prelude::*;

// 公共模块
pub mod ai;
pub mod combat;
pub mod components;
pub mod core;
pub mod setup;

// 以后：pub mod combat; pub mod ai; pub mod onchain;

//
// 聚合插件：在 main.rs 里只需 add_plugins(GamePlugin)
//
pub struct GamePlugin;

impl Plugin for GamePlugin {
    fn build(&self, app: &mut App) {
        app.insert_resource(ClearColor(Color::srgb(0.6, 0.8, 1.0)));// 设置背景色 // Set background color
        app.add_plugins(( setup::SetupPlugin,core::CorePlugin, combat::CombatPlugin, ai::AiPlugin));

        // 后续再加其他插件，例如：
        // app.add_plugins((
        //     combat::CombatPlugin,
        //     ai::AiPlugin,
        // ));
    }
}
