// light.rs
use bevy::prelude::*;

pub fn spawn_light(mut commands: Commands) {
    commands.spawn((
        PointLight {
            intensity: 800.0,
            range: 20.0,
            ..default()
        },
        Transform::from_xyz(4.0, 8.0, 4.0),
    ));
}
