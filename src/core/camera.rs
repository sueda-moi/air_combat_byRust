
use bevy::prelude::*;
use crate::components::*; // 引入组件 // Import components
/* ──────────────── Camera WASD move ─────────────── */
// WASD 平移相机  / Move camera with WASD
pub(crate) fn move_camera(
    keys: Res<ButtonInput<KeyCode>>,                       // 键盘输入资源
    time: Res<Time>,                                       // 时间资源
    mut q_cam: Query<&mut Transform, With<TagMainCamera>>, // 查询 TagMainCamera 组件和 Transform 组件
) {
    let mut cam_tf = q_cam.single_mut(); // 获取主摄像机的变换组件
    // 速度 (units / sec)
    let speed = 5.0; // 速度 (单位/秒) / Speed (units/sec)
    let mut dir = Vec3::ZERO; // 方向向量 / Direction vector

    // W-S 前后 (-Z 为前)   / forward-back (-Z is forward)
    if keys.pressed(KeyCode::KeyW) {
        dir.z -= 1.0;
    } // W 键前进 / W key forward
    if keys.pressed(KeyCode::KeyS) {
        dir.z += 1.0;
    } // S 键后退 / S key backward

    // A-D 左右          / left-right
    if keys.pressed(KeyCode::KeyA) {
        dir.x -= 1.0;
    } // A 键左移 / A key left
    if keys.pressed(KeyCode::KeyD) {
        dir.x += 1.0;
    } // D 键右移 / D key right

    if dir.length_squared() > 0.0 {
        dir = dir.normalize(); // 归一化方向向量 / Normalize direction vector
        cam_tf.translation += dir * speed * time.delta_secs(); // 更新摄像机位置 / Update camera position
        // 锁定 Y 高度      / keep constant Y
        cam_tf.translation.y = 2.0; // 锁定 Y 高度 / Lock Y height
    }
}