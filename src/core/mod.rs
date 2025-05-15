use bevy::prelude::*;

mod camera;
mod input;
mod rotate;

pub struct CorePlugin;

impl Plugin for CorePlugin {
    fn build(&self, app: &mut App) {
        app.add_event::<crate::components::HitEvent>()   // 注册事件
           .add_systems(Update, (
               camera::move_camera,
               input::close_on_esc,
               rotate::rotate_cube,
           ));
    }
}
