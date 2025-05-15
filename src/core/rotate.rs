
use bevy::prelude::*;
use crate::components::*; // 引入组件 // Import components
/*  ──────────────── Rotate cube ─────────────── */
pub(crate) fn rotate_cube(
    mut q: Query<&mut Transform, With<TagCube>>, // 查询 TagCube 组件和 Transform 组件
    // Query = 用来查询实体的命令队列
    // With = 只查询带有指定组件的实体
    // With = only query entities with the specified component
    // Transform = 变换组件，包含位置、旋转、缩放等信息
    // Transform = transformation component, containing position, rotation, scaling, etc.
    time: Res<Time>, // 时间资源，用于获取帧时间
                     // Res = 资源单例；这里代表时间资源的当前状态
                     // Res = resource singleton; here represents the current state of the time resource
) {
    let delta = 45.0_f32.to_radians() * time.delta_secs(); // 计算每帧旋转角度
    for mut trans in &mut q {
        trans.rotate_y(delta); // 沿 Y 轴旋转
        //沿 Y 轴旋转
    }
}