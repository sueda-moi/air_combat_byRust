use bevy::prelude::*;
use crate::components::*;

const ENEMY_SPEED: f32 = 3.0;
const STOP_DIST: f32 = 1.5;

pub(crate) fn enemy_chase(
    time: Res<Time>,
    mut q_enemy: Query<&mut Transform, With<Enemy>>,
    q_player: Query<&Transform, (With<Player>, Without<Enemy>)>,
) {
    let player_tf = q_player.single();
    for mut enemy_tf in &mut q_enemy {
        let dir = player_tf.translation - enemy_tf.translation;
        let dist = dir.length();
        if dist > STOP_DIST {
            enemy_tf.translation += dir.normalize() * ENEMY_SPEED * time.delta_secs();
        }
        // 可选调试 // Optional debug
        // info!("enemy pos: {:?}", enemy_tf.translation);
        // info!("player pos: {:?}", player_tf.translation);
        //info!("dist: {:.2}", dist);
    }
}