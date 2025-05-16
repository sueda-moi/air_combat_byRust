pub mod camera;
pub mod ui_camera;
pub mod light;
pub mod cube;
pub mod enemy;
pub mod ground;

use bevy::prelude::*;
use camera::spawn_camera;
use ui_camera::spawn_ui_camera;
use light::spawn_light;
use cube::spawn_cube;
use enemy::spawn_enemy;
use ground::spawn_ground;

pub struct SetupPlugin;

impl Plugin for SetupPlugin {
    fn build(&self, app: &mut App) {
        app.add_systems(Startup, (
            spawn_camera,
            spawn_ui_camera,
            spawn_light,
            spawn_cube,
            spawn_enemy,
            spawn_ground,
        ));
    }
}
