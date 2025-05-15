use bevy::prelude::*;
use crate::components::*; // 引入组件 // Import components

// apply_velocity (每帧)
pub(crate) fn apply_velocity(time: Res<Time>, mut q: Query<(&mut Transform, &mut Velocity)>) {
    for (mut tf, vel) in &mut q {
        tf.translation += **vel * time.delta_secs();
    }
}