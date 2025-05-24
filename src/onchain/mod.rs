//! On-chain integration: bindings, client logic, and Bevy plugin

pub mod bindings;
pub mod client;

pub use crate::shared::*; // 暂时保留引用 shared 的结构

use bevy::prelude::*;

/// 插件：用于未来注册链上相关的系统、事件等
pub struct OnchainPlugin;

impl Plugin for OnchainPlugin {
    fn build(&self, app: &mut App) {
        // 目前先做占位初始化
        app.add_systems(Startup, log_onchain_ready);
    }
}

fn log_onchain_ready() {
    info!("[onchain] OnchainPlugin registered.");
}
