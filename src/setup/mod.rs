//! Modular Startup Systems: spawn camera / light / cube / enemy / ground

mod camera;
mod light;
mod cube;
mod enemy;
mod ground;

use bevy::prelude::*;

use camera::spawn_camera;
use light::spawn_light;
use cube::spawn_cube;
use enemy::spawn_enemy;
use ground::spawn_ground;

/// Game Startup Plugin
pub struct SetupPlugin;

impl Plugin for SetupPlugin {
    fn build(&self, app: &mut App) {
        app.add_systems(Startup, (
            spawn_camera,
            spawn_light,
            spawn_cube,
            spawn_enemy,
            spawn_ground,
        ));
    }
} 
