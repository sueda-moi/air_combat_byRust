use bevy::prelude::*;

#[derive(Component)] pub struct TagCube; // 旋转立方体标签  / Cube marker
#[derive(Component)] pub struct TagMainCamera; // 主摄像机标签    / Main-camera marker
#[derive(Component)] pub struct Player; // 玩家标记  // Player marker
#[derive(Event)] pub struct HitEvent; // 碰撞事件标记  // Hit event marker
#[derive(Component)] pub struct Enemy; // 敌人标记  // Enemy marker
#[derive(Component)] pub struct Health {pub current: i32,} // 血量  // Health marker
#[derive(Component)] pub struct StaggerTimer(pub Timer); // 眩晕计时器  // Stagger timer marker

#[derive(Component, Deref, DerefMut)] pub struct Velocity(pub Vec3); // 速度  // Velocity marker
