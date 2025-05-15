// cube.rs
use crate::components::{Player, TagCube};
use bevy::prelude::*;

pub fn spawn_cube(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
) {
    /* Cube */
    let cube_mesh = meshes.add(Mesh::from(Cuboid::from_size(Vec3::ONE)));
    let cube_mat = materials.add(StandardMaterial::from(Color::WHITE));

    commands.spawn((
        Mesh3d(cube_mesh),
        MeshMaterial3d(cube_mat),
        Transform::from_xyz(0.0, 0.5, 0.0), // 稍微上升，避免穿模 // Slightly raised to avoid penetration
        TagCube,
        Player,
    ));
}
