use bevy::ecs::system::ParamSet;
use bevy::prelude::*;
use crate::components::*; // 引入组件 // Import components

/*──────── 伤害应用系统 ────────*/
// Apply damage system
pub(crate) fn apply_damage(
    mut ev_reader: EventReader<HitEvent>,
    mut commands: Commands,
    mut sets: ParamSet<(
        Query<(Entity, &mut Transform, &mut Health), With<Enemy>>, // p0: enemy
        Query<&Transform, With<Player>>,                           // p1: player
    )>,
) {
    //info!("[apply_damage] HitEvent detected and system running");
    // ① 只读玩家位置，借用立刻结束 // Read-only player position, borrow ends immediately
    let player_pos = sets.p1().single().translation; // 只读玩家位置 // Read-only player position
    // ② 处理所有 HitEvent
    for _ in ev_reader.read() {
        // 场景里只有一个 Enemy；如果有多个可以遍历并做距离判定
        if let Ok((enemy_ent, mut enemy_tf, mut hp)) = sets.p0().get_single_mut() {
            hp.current -= 10;
            info!("Enemy HP -> {}", hp.current.max(0));

            if hp.current > 0 {
                /* ---------- 击退 + 硬直 ---------- */
                // 方向 = 敌人 → 玩家 // Direction = Enemy → Player
                // 计算击退方向 // Calculate knockback direction
                let knock_dir = (enemy_tf.translation - player_pos).normalize(); // 归一化 // Normalize
                // 计算击退方向 // Calculate knockback direction

                // 即时位移 0.5 m // Instant displacement 0.5 m
                // 直接修改敌人位置 // Directly modify enemy position
                enemy_tf.translation += knock_dir * 0.5;

                // 在实体上插入 StaggerTimer 与 Velocity // Insert StaggerTimer and Velocity into the entity
                // StaggerTimer = 眩晕计时器，持续 0.3 秒
                commands
                    .entity(enemy_ent)
                    .insert(StaggerTimer(Timer::from_seconds(0.3, TimerMode::Once)))
                    .insert(Velocity(knock_dir * 4.0)); // 向外 4 u/s
            } else {
                info!("Victory!");
                // 可选：真正删除敌人实体，避免再次 get_single 出错
                // commands.entity(enemy_ent).despawn_recursive();
                // Optional: Actually delete the enemy entity to avoid getting single error again
                // commands.entity(enemy_ent).despawn_recursive();
                // 可选：真正删除敌人实体，避免再次 get_single 出错
                // 这里可以添加其他逻辑，比如播放动画、掉落物品等
                // Optional: Here you can add other logic, such as playing animations, dropping items, etc.
            }
        }
    }
}
