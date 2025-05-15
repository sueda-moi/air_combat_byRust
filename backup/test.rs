use bevy::ecs::system::ParamSet;
use bevy::prelude::Cuboid;
use bevy::prelude::*;
use bevy::render::mesh::{Mesh, Mesh3d};





/*──────────────── App entry ───────────────*/
fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_event::<HitEvent>() // ★ 注册事件类型 // Register event type
        .add_systems(Startup, setup)
        .add_systems(
            Update,
            (
                close_on_esc, // 1) Esc 退出：按下 Esc 键退出游戏
                move_camera,  // 2) WASD 移动：按下 WASD 键移动相机
                rotate_cube,  // 3) 旋转立方体：每帧旋转立方体
                player_slash, // 4) 玩家攻击：按下空格键触发攻击事件
                // 4) Player attack: Press the space key to trigger the attack event
                apply_damage, // 5) 应用伤害：处理 HitEvent 事件，减少敌人血量
                // 5) Apply damage: Process HitEvent event to reduce enemy health
                update_stagger, // 6) 眩晕系统：处理 StaggerTimer 和 Velocity
                // 6) Stagger system: Handle StaggerTimer and Velocity
                apply_velocity, // 7) 应用速度：每帧更新实体位置
                // 7) Apply velocity: Update entity position every frame
                enemy_chase, // 6) 敌人追击：敌人朝向玩家移动
                             // 6) Enemy chase: The enemy moves towards the player
            ),
        )
        .run();
}