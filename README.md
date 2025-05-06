# Air-Combat Demo (Bevy 0.15)  
空战 Demo – 基于 Bevy 0.15 的逐步教学项目
==========================================

> **Solo dev, step-by-step.**  
> **个人独立、一步一脚印。**

本仓库记录了一个极简实时战斗原型的搭建过程：  
从 **打开黑屏 → 场景搭建 → 物体旋转 / 输入处理**，逐步深入 Bevy 生态。  
The repo shows how to build a tiny real-time action prototype in incremental steps,
starting from an empty window, adding a scene, then motion / input, and beyond.

---

## 0 · Features / 已实现功能

| Status | Feature (EN) | 功能 (中文) |
|--------|--------------|-------------|
| ✅ | Blank window boot | 黑屏窗口启动 |
| ✅ | Esc → graceful quit | 按 **Esc** 退出 |
| ✅ | Scene setup via `Startup` systems | `Startup` 系统搭建场景 |
| ✅ | Camera + Point-light | 摄像机 + 点光源 |
| ✅ | 1 × 1 × 1 white cube (`Cuboid`) | 纯白立方体 |

> 下一步将实现：**Y-axis rotation** of the cube（立方体 Y 轴自转）。

---

## 1 · Requirements / 环境需求

| Tool | Minimum | 用途 |
|------|---------|------|
| Rust | 1.78 (stable) | 语言工具链 |
| Cargo | 同上 | 构建器 |
| Bevy | 0.15.1 | 游戏引擎 |
| Git  | optional | 版本管理（推荐） |

---

## 2 · Setup & Run / 快速开始

```bash
# 1. 安装 rustup（若未安装）
#    Install rustup if you don't have it
curl https://sh.rustup.rs -sSf | sh

# 2. 新建项目 / Create project
cargo new air_combat
cd air_combat

# 3. 添加 Bevy 依赖 / Add Bevy
cargo add bevy@0.15.1

# 4. 复制 src/main.rs 和 README.md
#    Copy src/main.rs & README.md from this repo

# 5. 运行 / Run
cargo run
