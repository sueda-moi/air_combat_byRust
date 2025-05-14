use bevy::ecs::system::ParamSet;
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

#[derive(Component)]
struct StaggerTimer(Timer); // 眩晕计时器  // Stagger timer marker

#[derive(Component, Deref, DerefMut)]
struct Velocity(Vec3); // 速度  // Velocity marker

const ENEMY_SPEED: f32 = 3.0; // units per second
const STOP_DIST: f32 = 1.5;

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
    mut commands: Commands,
    mut sets: ParamSet<(
        Query<(Entity, &mut Transform, &mut Health), With<Enemy>>, // p0: enemy
        Query<&Transform, With<Player>>,                           // p1: player
    )>,
) {
    // 1️⃣ 只读玩家变换 // 1️⃣ Read-only player transform

    // ① 只读玩家位置，借用立刻结束
    let player_pos = sets.p1().single().translation;
    // ② 处理所有 HitEvent
    for _ in ev_reader.read() {
        // 场景里只有一个 Enemy；如果有多个可以遍历并做距离判定
        if let Ok((enemy_ent, mut enemy_tf, mut hp)) = sets.p0().get_single_mut() {
            hp.current -= 10;
            info!("Enemy HP -> {}", hp.current.max(0));

            if hp.current > 0 {
                /* ---------- 击退 + 硬直 ---------- */
                // 方向 = 敌人 → 玩家 // Direction = Enemy → Player
                // 计算击退方向 // Calculate knockback direction
                let knock_dir = (enemy_tf.translation - player_pos).normalize(); // 归一化 // Normalize
                // 计算击退方向 // Calculate knockback direction

                // 即时位移 0.5 m // Instant displacement 0.5 m
                // 直接修改敌人位置 // Directly modify enemy position
                enemy_tf.translation += knock_dir * 0.5;

                // 在实体上插入 StaggerTimer 与 Velocity // Insert StaggerTimer and Velocity into the entity
                // StaggerTimer = 眩晕计时器，持续 0.3 秒
                commands
                    .entity(enemy_ent)
                    .insert(StaggerTimer(Timer::from_seconds(0.3, TimerMode::Once)))
                    .insert(Velocity(knock_dir * 4.0)); // 向外 4 u/s
            } else {
                info!("Victory!");
                // 可选：真正删除敌人实体，避免再次 get_single 出错
                // commands.entity(enemy_ent).despawn_recursive();
                // Optional: Actually delete the enemy entity to avoid getting single error again
                // commands.entity(enemy_ent).despawn_recursive();
                // 可选：真正删除敌人实体，避免再次 get_single 出错
                // 这里可以添加其他逻辑，比如播放动画、掉落物品等
                // Optional: Here you can add other logic, such as playing animations, dropping items, etc.
            }
        }
    }
}

//  ===== 眩晕系统 ===============================
// 眩晕系统：处理眩晕计时器和速度 // Stagger system: Handle stagger timer and velocity
// update_stagger
fn update_stagger(time: Res<Time>, mut q: Query<(&mut StaggerTimer, &mut Velocity)>) {
    for (mut timer, mut vel) in &mut q {
        timer.0.tick(time.delta());
        if timer.0.finished() {
            vel.0 = Vec3::ZERO; // 停止额外力
        }
    }
}

//  ===== 应用速度系统 ===============================

// apply_velocity (每帧)
fn apply_velocity(time: Res<Time>, mut q: Query<(&mut Transform, &mut Velocity)>) {
    for (mut tf, mut vel) in &mut q {
        tf.translation += **vel * time.delta_secs();
    }
}
// ===== ③ Enemy Chase 系统 ===============================

fn enemy_chase(
    time: Res<Time>,
    mut q_enemy: Query<&mut Transform, With<Enemy>>,
    q_player: Query<&Transform, (With<Player>, Without<Enemy>)>,
) {
    let player_tf = q_player.single();
    for mut enemy_tf in &mut q_enemy {
        let dir = player_tf.translation - enemy_tf.translation;
        let dist = dir.length();
        if dist > STOP_DIST {
            enemy_tf.translation += dir.normalize() * ENEMY_SPEED * time.delta_secs();
        }
        // 可选调试 // Optional debug
        // info!("enemy pos: {:?}", enemy_tf.translation);
        // info!("player pos: {:?}", player_tf.translation);
        //info!("dist: {:.2}", dist);
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
                update_stagger, // 6) 眩晕系统：处理 StaggerTimer 和 Velocity
                // 6) Stagger system: Handle StaggerTimer and Velocity
                apply_velocity, // 7) 应用速度：每帧更新实体位置
                // 7) Apply velocity: Update entity position every frame
                enemy_chase, // 6) 敌人追击：敌人朝向玩家移动
                             // 6) Enemy chase: The enemy moves towards the player
            ),
        )
        .run();
}
