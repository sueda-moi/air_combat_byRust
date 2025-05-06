use bevy::prelude::*;


//listen for the escape key
fn close_on_esc(

    mut exit: EventWriter<AppExit>, // event writer to exit the app
    keys: Res<ButtonInput<KeyCode>>,// input resource to check for key presses
) {
    if keys.just_pressed(KeyCode::Escape) {
        exit.send(AppExit::Success);//← Here we use the enumeration variant Success
    }
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)// add default plugins
        .add_systems(Update,close_on_esc)// add the close_on_esc system to the update stage
        .run(); 
}


