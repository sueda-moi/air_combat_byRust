// camera.rs
use bevy::prelude::*;
use crate::components::*; // 引入组件 // Import components

pub fn spawn_camera(mut commands: Commands) {
    commands.spawn((
        Camera3d::default(),
        Transform::from_xyz(0.0, 2.0, 5.0).looking_at(Vec3::ZERO, Vec3::Y),
        TagMainCamera,
    ));
}