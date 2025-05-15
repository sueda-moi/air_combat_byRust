// enemy.rs
use bevy::prelude::*;
use crate::components::{Enemy, Health};


pub fn spawn_enemy(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
) {
    // 立方体玩家已存在，下方再生成 Enemy 立方体，位置偏右 // The cube player already exists, and the enemy cube is generated below, offset to the right
    let enemy_mesh = meshes.add(Mesh::from(Cuboid::from_size(Vec3::ONE)));
    let enemy_mat = materials.add(StandardMaterial::from(Color::srgb_u8(200, 60, 60))); // 红色材质 // Red material

    commands.spawn((
        Mesh3d(enemy_mesh),
        MeshMaterial3d(enemy_mat),
        Transform::from_xyz(9.0, 0.0, 0.0), // 站在玩家右前方
        Enemy,
        Health { current: 30 }, // 初始 30 HP
    ));
}