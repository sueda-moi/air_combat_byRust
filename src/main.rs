use bevy::prelude::Cuboid;
use bevy::prelude::*;
use bevy::render::mesh::{Mesh, Mesh3d};

/*  ──────────────── Tag components ─────────────── */
#[derive(Component)]
struct TagCube; // 旋转立方体标签  / Cube marker
#[derive(Component)]
struct TagMainCamera; // 主摄像机标签    / Main-camera marker

#[derive(Component)]
struct Player; // 玩家标记  // Player marker

#[derive(Event)]
struct HitEvent; // 碰撞事件标记  // Hit event marker

#[derive(Component)]
struct Enemy; // 敌人标记  // Enemy marker

#[derive(Component)]
struct Health {
    current: i32,
} // 血量  // Health marker

/* ──────────────── Esc → Quit ─────────────── */
fn close_on_esc(
    keys: Res<ButtonInput<KeyCode>>, // 键盘输入资源
    // Res = 资源单例；这里代表整块键盘输入的当前状态
    // Res = resource singleton; here represents the current state of the entire keyboard input
    mut exit: EventWriter<AppExit>, // 事件写入器，用于发送退出事件
                                    // EventWriter = 用来往事件队列里写入新事件
) {
    if keys.just_pressed(KeyCode::Escape) {
        exit.send(AppExit::Success); // 发送退出事件
    }
    // 发送退出事件
}

/* ──────────────── Camera WASD move ─────────────── */
// WASD 平移相机  / Move camera with WASD
fn move_camera(
    keys: Res<ButtonInput<KeyCode>>,                       // 键盘输入资源
    time: Res<Time>,                                       // 时间资源
    mut q_cam: Query<&mut Transform, With<TagMainCamera>>, // 查询 TagMainCamera 组件和 Transform 组件
) {
    let mut cam_tf = q_cam.single_mut(); // 获取主摄像机的变换组件
    // 速度 (units / sec)
    let speed = 5.0; // 速度 (单位/秒) / Speed (units/sec)
    let mut dir = Vec3::ZERO; // 方向向量 / Direction vector

    // W-S 前后 (-Z 为前)   / forward-back (-Z is forward)
    if keys.pressed(KeyCode::KeyW) {
        dir.z -= 1.0;
    } // W 键前进 / W key forward
    if keys.pressed(KeyCode::KeyS) {
        dir.z += 1.0;
    } // S 键后退 / S key backward

    // A-D 左右          / left-right
    if keys.pressed(KeyCode::KeyA) {
        dir.x -= 1.0;
    } // A 键左移 / A key left
    if keys.pressed(KeyCode::KeyD) {
        dir.x += 1.0;
    } // D 键右移 / D key right

    if dir.length_squared() > 0.0 {
        dir = dir.normalize(); // 归一化方向向量 / Normalize direction vector
        cam_tf.translation += dir * speed * time.delta_secs(); // 更新摄像机位置 / Update camera position
        // 锁定 Y 高度      / keep constant Y
        cam_tf.translation.y = 2.0; // 锁定 Y 高度 / Lock Y height
    }
}

/*  ──────────────── Rotate cube ─────────────── */
fn rotate_cube(
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

// ===== ② Player Slash 系统 ===============================
fn player_slash(
    keys: Res<ButtonInput<KeyCode>>,
    mut ev_writer: EventWriter<HitEvent>,
    q_player: Query<Entity, With<Player>>,
) {
    if keys.just_pressed(KeyCode::Space) {
        if q_player.get_single().is_ok() {
            ev_writer.send(HitEvent);
            info!("HitEvent sent"); // 看到这行说明触发成功 // If you see this line, it means the trigger is successful
        }
    }
}

/*──────── 伤害应用系统 ────────*/
// Apply damage system
fn apply_damage(
    mut ev_reader: EventReader<HitEvent>,
    mut q_enemy: Query<(&mut Health, Entity), With<Enemy>>,
) {
    for _ in ev_reader.read() {
        if let Ok((mut hp, entity)) = q_enemy.get_single_mut() {
            hp.current -= 10;
            info!("Enemy HP -> {}", hp.current.max(0)); // 打印剩余血量 // Print remaining health

            if hp.current <= 0 {
                info!("Victory!");
                // 可选：despawn 敌人
                // commands.entity(entity).despawn_recursive();
            }
        }
    }
}

/* ──────────────── Setup ─────────────── */
/*──────────────── Scene setup ───────────────*/
fn setup(
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
        TagCube,
        Player,   // ★ 挂 Player 标签 // Add Player tag
        HitEvent, // ★ 挂 HitEvent 标签 // Add HitEvent tag
    ));
    // 立方体玩家已存在，下方再生成 Enemy 立方体，位置偏右 // The cube player already exists, and the enemy cube is generated below, offset to the right
    let enemy_mesh = meshes.add(Mesh::from(Cuboid::from_size(Vec3::ONE)));
    let enemy_mat = materials.add(StandardMaterial::from(Color::srgb_u8(200, 60, 60))); // 红色材质 // Red material

    commands.spawn((
        Mesh3d(enemy_mesh),
        MeshMaterial3d(enemy_mat),
        Transform::from_xyz(3.0, 0.0, 0.0), // 站在玩家右前方
        Enemy,
        Health { current: 30 }, // 初始 30 HP
    ));
}

/*──────────────── App entry ───────────────*/
fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_event::<HitEvent>() // ★ 注册事件类型 // Register event type
        .add_systems(Startup, setup)
        .add_systems(
            Update,
            (
                close_on_esc, // 1) Esc 退出：按下 Esc 键退出游戏
                move_camera,  // 2) WASD 移动：按下 WASD 键移动相机
                rotate_cube,  // 3) 旋转立方体：每帧旋转立方体
                player_slash, // 4) 玩家攻击：按下空格键触发攻击事件
                              // 4) Player attack: Press the space key to trigger the attack event
                              apply_damage, // 5) 应用伤害：处理 HitEvent 事件，减少敌人血量
                // 5) Apply damage: Process HitEvent event to reduce enemy health
            ),
        )
        .run();
}
