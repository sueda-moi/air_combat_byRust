use bevy::prelude::*;
use crate::components::*; // 引入组件 // Import components

// ===== ② Player Slash 系统 ===============================
pub(crate) fn player_slash(
    keys: Res<ButtonInput<KeyCode>>,
    mut ev_writer: EventWriter<HitEvent>,
    q_player: Query<Entity, With<Player>>,
) {
    if keys.just_pressed(KeyCode::Space) {
        if q_player.get_single().is_ok() {
            ev_writer.send(HitEvent);
            info!("HitEvent sent"); // 看到这行说明触发成功 // If you see this line, it means the trigger is successful
        }
    }
}