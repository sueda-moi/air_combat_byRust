//引入 bevy 最常用的预导出模块（Transform、Vec3、App 等）
//Import the most commonly used pre-export modules of bevy (Transform, Vec3, App, etc.)
use bevy::prelude::*; // AppExit = 退出事件
use bevy::render::mesh::{Mesh, Mesh3d}; // Mesh = 网格组件
use bevy::prelude::Cuboid;  // Cuboid = 立方体几何体

//listen for the escape key
/*-----------------------------------------------------------------------------------
    系统函数：close_on_esc  System function: close_on_esc
------------------------------------------------------------------------------------
· 它会在「每一帧」被运行（因为我们稍后把它挂到 Update 阶段）
//It will be run "every frame" (because we will hook it into the Update phase later)
· 检查键盘上 Esc 键是否“刚被按下”。
//Check if the Esc key on the keyboard was "just pressed".
· 如果按下，就向 Bevy 的“事件总线”发送一个 AppExit 事件，告诉引擎“可以优雅退出了”。
//If pressed, an AppExit event is sent to Bevy's "event bus" to tell the engine that "it is time to exit gracefully".

 */
fn close_on_esc(
    mut exit: EventWriter<AppExit>,
    // EventWriter = 用来往事件队列里写入新事件
    // event writer to exit the app
    keys: Res<ButtonInput<KeyCode>>,
    // input resource to check for key presses
    // Res = 资源单例；这里代表整块键盘输入的当前状态
) {
    // just_pressed：仅在按键从“松开”→“按下”的那 1 帧返回 true
    if keys.just_pressed(KeyCode::Escape) {
        // AppExit 是一个枚举(enum)，Success 表示“正常退出”。
        // 这里相当于说：“Hey，App，请正常关闭吧！”
        exit.send(AppExit::Success); //← Here we use the enumeration variant Success
    }
}

/* -------------------------------------------------------------------------
   系统函数：setup
   -------------------------------------------------------------------------
   · 只在游戏启动时运行一次（属于 Startup 阶段）
   · 创建场景里最基础的三个实体：摄像机、光源、立方体
--------------------------------------------------------------------------- */
fn setup(
    mut commands: Commands, // 用于生成/配置实体
    // Commands = 用来创建实体的命令队列
    // commands = command queue to create entities
    mut meshes: ResMut<Assets<Mesh>>, // 管理 Mesh 资源的全局容器
    // Assets = 资源单例；这里代表网格资源的当前状态
    // ResMut = 可变资源单例；这里代表网格资源的当前状态
    mut materials: ResMut<Assets<StandardMaterial>>, // 管理材质资源的全局容器
                                                     // Assets = 资源单例；这里代表材质资源的当前状态
                                                     // ResMut = 可变资源单例；这里代表材质资源的当前状态
) {
    /* ---------------- 摄像机 Camera (新写法) ----------------
       直接插入 Camera3d 组件，Bevy 会自动附加 Projection、
       Frustum 等其他必需组件。
    --------------------------------------------------------- */
    //  // 1) 摄像机：放在 (0,2,5)，朝 (0,0,0) 看
    commands.spawn((
        // Camera3d 现在是 **组件**，用 ::default() 生成一个值
        // Camera3d is now a component; ::default() creates its value
        Camera3d::default(), // 相机组件 Camera component
        Transform::from_xyz(0.0, 2.0, 5.0) // 位置 Position
            .looking_at(Vec3::ZERO, Vec3::Y), // 朝向 Look-at origin
    ));
    // 2) 点光源：稍微高一点，照亮立方体
    commands.spawn((
        PointLight {
            // 光源组件 Light component
            intensity: 800.0, // 亮度 Intensity
            range: 20.0,      // 影响范围 Light range
            ..default()       // 其他参数使用默认值
        },
        Transform::from_xyz(4.0, 8.0, 4.0), // 光源位置 Light position
    ));

    // 3) 立方体：边长 1.0，纯白材质
    /* ---------- 立方体 Cube (Mesh3d + MeshMaterial3d) ---------- */
    // 1. 创建网格与材质句柄  // Create mesh & material handles
    // 1. 把 Cuboid 转成 Mesh / Convert Cuboid into a Mesh
    let cube_mesh = meshes.add(Mesh::from(Cuboid::from_size(Vec3::ONE)));
     // 2. 纯白 StandardMaterial / Pure-white material
    let cube_mat  = materials.add(StandardMaterial::from(Color::WHITE));

    // 2. 插入组件  // Spawn entity with components
    commands.spawn((
        // 3D 网格组件 Mesh component
        Mesh3d::from(cube_mesh),// 几何体 Geometry
        MeshMaterial3d::from(cube_mat), // 材质 Material
        Transform::default(),  // 变换 Transform
    ));
}

/* -------------------------------------------------------------------------
   main：应用入口
--------------------------------------------------------------------------- */
fn main() {
    App::new()
        // 把 Bevy 自带的「渲染 / 输入 / 音频 / 时间」等默认插件全部添加进来
        .add_plugins(DefaultPlugins) // add default plugins
        // Startup 阶段：只在第一帧运行一次，用来生成初始场景
        .add_systems(Startup, setup)
        // Update 阶段：每一帧运行，用来处理输入、游戏逻辑
        .add_systems(Update, close_on_esc) // add the close_on_esc system to the update stage
        // 启动游戏主循环
        .run();
}
