# Air‑Combat Demo (Bevy 0.15)

空战实时战斗原型

> Solo dev – step by step.
> 个人独立 · 一步一脚印

---

## ① Project Vision / 项目愿景

A small‑scale real‑time **combat sandbox** built with **Rust + Bevy**, then extended to an on‑chain game for the 2025 Solana hackathon.

* **Gameplay 目标** | 实机玩法：空中连击 · 轻功 · Boss 速杀
* **Lore 核心** | 世界观：反抗暴政 / 失忆伙伴 / 白蛇圣物 / 雪山终点
* **Chain 集成** | 上链：钱包登录 · 战绩记录 · NFT 道具 · 剧情节点

---

## ② Current Status / 当前进度

|  Stage          |  Done  |  说明                     |
| --------------- | ------ | ----------------------- |
|  Boot Window    |  ✅     | 窗口 + ESC 退出             |
|  Scene Setup    |  ✅     | 摄像机 · 点光源 · 立方体         |
|  Cube Rotation  |  ✅     | 45°/s Y‑axis 自转         |
|  Camera WASD    |  ✅     | WASD 平移主摄像机             |
|  Combat Core α  |  ⏳     | Player Slash, Enemy AI… |


---

## ③ Directory Layout / 目录结构

```
├─ assets/            # meshes, textures, animations
├─ src/
│   └─ main.rs        # single‑file prototype (will split later)
├─ schedule.md        # step‑by‑step task log
└─ README.md          # this file
```

---

## ④ Build & Run / 快速开始

```bash
# Prerequisites
rustup update stable        # Rust 1.78+
cargo install cargo‑edit    # for `cargo add`

# Clone & build
git clone <repo>
cd air_combat
cargo run                   # debug build
```

发布版：`cargo run --release`。

---

## ⑤ Roadmap / 路线图

> 详细时间表见 **schedule.md**

1. **Combat Core α (May)**  – Player Slash, Enemy Chase, HP & Hit, Stagger/Knockback
2. **Combat Core β (May‑Jun)** – Combo FSM, YAML hot‑reload stats, Mini‑Boss demo
3. **Vertical Slice v1 (Jun)** – Chapter‑1 scene, wallet connect, on‑chain battle record
4. **Vertical Slice v2 (Jul)** – NFT loot, story checkpoints on chain, UI polish
5. **Hackathon Polish (Aug–Sep)** – networked co‑op prototype, QA, docs

---

## ⑥ Tech Stack

* **Rust 1.78 stable**
* **Bevy 0.15.1** (+ Rapier3D, bevy\_asset\_loader)
* **Solana SDK** / Anchor / Metaplex

---

## ⑦ Contribution / 贡献

The project is currently a solo R\&D log. PRs welcome after Vertical Slice v1.

项目早期以个人实验为主，待 v1 后开放外部 PR。欢迎在 Issue 里讨论改进建议。

---

## ⑧ License

MIT

---

> "Run, remember, and reach the radiant snow mountain."
