# 🦀 Rust 风格细节推荐表（实战维护向）

> 适合：工程实践 / 开源协作 / 长期维护项目

---

## 1. ✅ 末尾逗号（Trailing Comma）

### ✅ 推荐在以下结构中保留逗号：

* 多行元组
* 多行数组 / 列表 / 宏参数
* 多行函数参数 / 返回值
* 多行 `match` 分支
* 多个插件 `.add_plugins((...))`

```rust
let config = (
    mode,
    path,
    debug,
);
```

> 优点：减少 diff 噪音，更易于追加元素。

---

## 2. ✅ `use` 顺序（Import Ordering）

推荐分组 + 空行隔开：

```rust
// 标准库
use std::fs::File;
use std::collections::HashMap;

// 外部 crate
use bevy::prelude::*;

// 本 crate 的模块
use crate::components::Player;
use crate::core::rotate_cube;
```

> 使用 `rust-analyzer` + `rustfmt` 可自动整理。

---

## 3. ✅ 空行的使用

### 推荐添加空行的位置：

* 函数之间
* `struct` / `impl` / `enum` 定义之间
* 不同逻辑分块（可加注释）

```rust
fn move_player() { ... }

fn rotate_cube() { ... }
```

---

## 4. ✅ 函数体缩进与注释

```rust
fn setup() {
    // 摄像机
    commands.spawn(...);

    // 光源
    commands.spawn(...);
}
```

* 每一层缩进 **4 空格**（默认）
* 块内部注释建议使用 `//` 而不是 `///`

---

## 5. ✅ 模块结构（mod.rs）

### 推荐结构：

```bash
src/
├── main.rs         # 入口
├── lib.rs          # 插件聚合点（GamePlugin）
├── core/          # 核心功能
│   ├── mod.rs
│   ├── input.rs
│   └── camera.rs
├── combat/        # 战斗系统
├── ai/            # AI 行为树或状态机
├── components.rs  # 组件声明（位置、速度、血量等）
```

---

## 6. ✅ 常见约定命名

| 类型       | 命名风格             | 示例                 |
| -------- | ---------------- | ------------------ |
| struct   | UpperCamel       | `Player`, `Health` |
| enum     | UpperCamel       | `GameState`        |
| fn / var | snake\_case      | `update_hp()`      |
| const    | SCREAMING\_SNAKE | `MAX_HP`           |

---

## 7. ✅ 日志 / info 输出

* 使用 `info!()` 而非 `println!()`
* 需导入：`use bevy::log::info;`

```rust
info!("HP -> {}", hp.current);
```

---

## 8. ✅ `#[derive(...)]` 多行时建议格式：

```rust
#[derive(
    Component,
    Debug,
    Clone,
    PartialEq,
)]
pub struct Player;
```

---

## 9. ✅ 文件命名

* 文件：`snake_case.rs`
* 文件夹：`snake_case/`
* 不推荐 `Player.rs`、`AI.rs` 这种大写

---

## 10. ✅ 工具推荐

* 自动格式化：`cargo fmt`
* 自动检查：`cargo clippy`
* IDE 插件：`rust-analyzer`

---

如需进一步细化成你的项目模板或加 Git 钩子，欢迎提出 🛠
