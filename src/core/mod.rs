use bevy::prelude::*;

mod camera;
mod input;
mod rotate;

pub struct CorePlugin;

impl Plugin for CorePlugin {
    fn build(&self, app: &mut App) {
        app.add_event::<crate::components::HitEvent>().add_systems(
            Update,
            (
                input::close_on_esc,
                rotate::rotate_cube,
                camera::move_camera,
            ),
        );
    }
}
