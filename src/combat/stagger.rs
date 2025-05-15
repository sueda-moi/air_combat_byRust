use bevy::prelude::*;
use crate::components::*; // 引入组件 // Import components


// 眩晕系统：处理眩晕计时器和速度 // Stagger system: Handle stagger timer and velocity
// update_stagger
pub(crate) fn update_stagger(time: Res<Time>, mut q: Query<(&mut StaggerTimer, &mut Velocity)>) {
    for (mut timer, mut vel) in &mut q {
        timer.0.tick(time.delta());
        if timer.0.finished() {
            vel.0 = Vec3::ZERO; // 停止额外力
        }
    }
}