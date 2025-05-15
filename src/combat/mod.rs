use bevy::prelude::*;

mod slash;
mod damage;
mod stagger;
mod velocity;

pub struct CombatPlugin;

impl Plugin for CombatPlugin {
    fn build(&self, app: &mut App) {
        app.add_event::<crate::components::HitEvent>()   // 注册事件
           .add_systems(Update, (
               slash::player_slash,
               damage::apply_damage,
               stagger::update_stagger,
               velocity::apply_velocity,
           ));
    }
}
