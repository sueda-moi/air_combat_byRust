use bevy::prelude::*;

mod chase;

pub struct AiPlugin;
impl Plugin for AiPlugin {
    fn build(&self, app: &mut App) {
        app.add_systems(Update, chase::enemy_chase);
    }
}
