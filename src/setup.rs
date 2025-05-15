use bevy::prelude::Cuboid;
use bevy::prelude::*;
use bevy::render::mesh::{Mesh, Mesh3d};

use crate::components::*; // 引入组件 // Import components
/* ──────────────── Setup ─────────────── */
/*──────────────── Scene setup ───────────────*/
pub fn setup(
    mut commands: Commands, // 命令队列，用于创建实体和组件 // Command queue for creating entities and components
    mut meshes: ResMut<Assets<Mesh>>, // 网格资源，用于创建网格 // Mesh resource for creating meshes
    mut materials: ResMut<Assets<StandardMaterial>>, // 材质资源，用于创建材质 // Material resource for creating materials
) {
    /* Camera */
    commands.spawn((
        Camera3d::default(),
        Transform::from_xyz(0.0, 2.0, 5.0).looking_at(Vec3::ZERO, Vec3::Y),
        TagMainCamera, // ★ 标签
    ));

    /* Light */
    commands.spawn((
        PointLight {
            intensity: 800.0,
            range: 20.0,
            ..default()
        },
        Transform::from_xyz(4.0, 8.0, 4.0),
    ));

    /* Cube */
    let cube_mesh = meshes.add(Mesh::from(Cuboid::from_size(Vec3::ONE)));
    let cube_mat = materials.add(StandardMaterial::from(Color::WHITE));

    commands.spawn((
        Mesh3d(cube_mesh),
        MeshMaterial3d(cube_mat),
        Transform::default(),
        TagCube, // ★ 挂 TagCube 标签 // Add TagCube tag
        Player, // ★ 挂 Player 标签 // Add Player tag
    ));
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