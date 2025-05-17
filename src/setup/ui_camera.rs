use bevy::prelude::*;

pub fn spawn_ui_camera(mut commands: Commands) {
    commands.spawn((
        Camera2d::default(),
        Camera {
            order: 1,
            ..default()
        },
    ));
}
