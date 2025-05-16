use bevy::prelude::*;
use air_combat::GamePlugin;      // ← 用包名前缀 air_combat

fn main() {
    App::new()
        .add_plugins((DefaultPlugins, GamePlugin))
        .run();
}


