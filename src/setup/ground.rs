//! Ground plane setup for the Air Combat demo

use bevy::prelude::*;
use bevy::render::mesh::Mesh;
use bevy::render::mesh::Mesh3d;
use bevy::math::primitives::Plane3d;

/// Spawn a wide plane to serve as the background/ground.
pub fn spawn_ground(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
) {
    // === Ground Mesh ===
    let ground_mesh: Handle<Mesh> =
        meshes.add(Mesh::from(Plane3d::new(Vec3::Y, Vec2::splat(50.0))));

    // === Ground Material ===
    let ground_mat: Handle<StandardMaterial> = materials.add(StandardMaterial {
        base_color: Color::srgb(0.3, 0.6, 0.3), // 草绿色 / grassy green
        perceptual_roughness: 1.0,
        ..default()
    });

    // === Spawn Ground Entity ===
    commands.spawn((
        Mesh3d(ground_mesh),
        MeshMaterial3d(ground_mat),
        Transform::from_xyz(0.0, -0.5, 0.0), // 稍微下沉，避免穿模
    ));
}
