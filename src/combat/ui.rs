use crate::components::*;
use bevy::prelude::*;
use crate::onchain::client::send_record_result;
use wasm_bindgen_futures::spawn_local;
use bevy::input::keyboard::KeyCode;
use bevy::input::ButtonInput;


// deal with battle end event
fn on_battle_end() {
    let result: u8 = 1; // 示例：1 表示胜利
    wasm_bindgen_futures::spawn_local(async move {
        send_record_result(result).await;
    });
}



pub fn spawn_enemy_hp_text(
    mut commands: Commands,
    asset_server: Res<AssetServer>,
    query: Query<Entity, (With<Enemy>, Without<EnemyHpText>)>,
) {
    let font = asset_server.load("fonts/FiraSans-Bold.ttf");
    let font_handle: Handle<Font> = asset_server.load("fonts/FiraSans-Bold.ttf");
    if !asset_server.is_loaded(&font_handle) {
        return; // 字体未加载完成，跳过本帧
    }
    //for enemy in &query {
    // commands.entity(enemy).with_children(|parent| {
    //     parent.spawn((
    //         Text2d::new("HP: 30"),
    //         TextFont {
    //             font: font.clone().into(),
    //             font_size: 20.0,
    //             ..default()
    //         },
    //         TextColor(Color::WHITE.into()),
    //         TextLayout::default(),
    //         Transform::from_xyz(0.0, 2.0, 0.0),
    //         EnemyHpText,
    //     ));
    // });
    //  }
    for _enemy in &query {
        commands.spawn((
            Text2d::new("HP: 30"),
            TextFont {
                font: font.clone().into(),
                font_size: 80.0,
                ..default()
            },
            TextColor(Color::WHITE.into()),
            Transform::from_xyz(0.0, 2.5, 0.1),
            EnemyHpText,
        ));
    }
}

pub fn update_enemy_hp_text(
    mut q_text: Query<(&mut Text, &Parent), With<EnemyHpText>>,
    q_hp: Query<&Health>,
) {
    for (mut text, parent) in &mut q_text {
        if let Ok(hp) = q_hp.get(parent.get()) {
            text.0 = format!("HP: {}", hp.current.max(0));
        }
    }
}

pub fn on_key_press(input: Res<ButtonInput<KeyCode>>) {
    if input.just_pressed(KeyCode::KeyB) {
        let result: u8 = 1; // 示例：胜利 
        spawn_local(async move {
            send_record_result(result).await;
        });
    }
}

