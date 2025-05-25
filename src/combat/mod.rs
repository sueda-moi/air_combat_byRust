use bevy::prelude::*;

mod damage;
mod slash;
mod stagger;
mod ui;
mod velocity;

use ui::{spawn_enemy_hp_text, update_enemy_hp_text, on_key_press};

pub struct CombatPlugin;

impl Plugin for CombatPlugin {
    fn build(&self, app: &mut App) {
        app.add_event::<crate::components::HitEvent>() // 注册事件
            .add_systems(Startup, spawn_enemy_hp_text)
            .add_systems(
                Update,
                (
                    slash::player_slash,
                    damage::apply_damage,
                    stagger::update_stagger,
                    velocity::apply_velocity,
                    update_enemy_hp_text,
                     on_key_press,
                ),
            );
    }
}
