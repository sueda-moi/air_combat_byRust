
use bevy::prelude::*;

/* ──────────────── Esc → Quit ─────────────── */
pub(crate) fn close_on_esc(
    keys: Res<ButtonInput<KeyCode>>, // 键盘输入资源
    // Res = 资源单例；这里代表整块键盘输入的当前状态
    // Res = resource singleton; here represents the current state of the entire keyboard input
    mut exit: EventWriter<AppExit>, // 事件写入器，用于发送退出事件
                                    // EventWriter = 用来往事件队列里写入新事件
) {
    if keys.just_pressed(KeyCode::Escape) {
        exit.send(AppExit::Success); // 发送退出事件
    }
    // 发送退出事件
}