<p align="center">
  <img src="./assets/logo.png" alt="Air-Combat Logo" width="300"/>
</p>

# ❄️ Air-Combat: Real-Time Solana Game Prototype

> ⛓️ A lightweight combat game prototype built with Rust + Bevy, designed for on-chain battle record integration on Solana.

## 🎮 Gameplay Demo

- WASD: Move the camera
- Space: Slash attack
- Cube (Player) vs. Red Cube (Enemy)
- Real-time damage system with hit reaction and knockback
- Enemy HP text updates dynamically

<!-- Optional: Insert animated gif or screenshot -->

<!-- ![screenshot](./assets/demo.gif) -->

---

## ✅ Features Implemented

| Feature | Description |
| --- | --- |
| Basic scene setup | Camera, light, player/enemy cubes |
| Cube rotation system | Continuous Y-axis rotation |
| WASD camera movement | Free-fly camera controller |
| Player slash system | HitEvent triggered via Spacebar |
| Enemy damage & knockback | Enemy HP reduces on hit |
| Enemy HP text UI | Floating HP updates above enemy cube |
| Modular ECS plugin structure | Separated into core/combat/ai modules |
| 🔌 WASM + Solana frontend integration | Vite + wasm-pack + Solana devnet signer |

---

## 🚧 Work in Progress

> This is an active prototype under development. More systems are being added every day.

| Next Milestones |
| --- |
| \[ ] Multi-enemy system with targeting |
| \[ ] Full ability system (hitbox + cooldowns) |
| \[ ] On-chain battle recording (Anchor) |
| \[ ] UI panel: result / log / wallet connect |
| \[ ] Scene builder with snow-mountain theme |

---

## 🧩 WASM Integration Overview

This project includes a **Rust-generated WebAssembly module** (`wasm_bridge`) for Solana wallet interop. It exposes a function `sign_and_send_transaction` that can be triggered via in-game logic.

**Key files and structure:**

- `wasm_bridge/`: Rust crate that builds to `.wasm` via `wasm-pack`
- `frontend/src/js_bridge.ts`: Loads the wasm module & mounts `window.signAndSendTransaction`
- `frontend/vite.config.ts`: Configures alias `@wasm` and ensures wasm file served from `public/`
- `frontend/public/wasm_bridge/wasm_bridge_bg.wasm`: Compiled WebAssembly binary

**How to build wasm:**

```bash
# From project root
wasm-pack build wasm_bridge --target web

# Copy result to frontend/public
cp -r wasm_bridge/pkg/* frontend/public/wasm_bridge/
```

**Usage:**

In `js_bridge.ts`:

```ts
import init, { sign_and_send_transaction } from "@wasm/wasm_bridge";
const wasm_url = new URL("/wasm_bridge/wasm_bridge_bg.wasm", import.meta.url);
await init(wasm_url);
```

---

## 🌄 World Vision

> Inspired by a recurring dream: companions with lost memories, rebellion against a hidden order, and a radiant snow mountain as the final destination.

> This game demo serves both as a standalone narrative project, and as the testbed for a reusable, open-source Bevy combat framework.

This project will grow into a **lore-rich, modular open-source world engine**, starting from a minimalist battle system.

---

## ⚙️ Tech Stack

- 🦀 Rust + [Bevy 0.15](https://bevyengine.org/)
- 📦 ECS-based system modularization (Plugins)
- 🎮 Real-time combat systems (slash, stagger, velocity)
- 🧠 Designed for on-chain integration (Solana Devnet + Anchor)
- 🌐 Vite + TypeScript frontend + WebAssembly bridge

---

## 📁 How to Run

```bash
git clone https://github.com/sueda-moi/air_combat_byRust
cd air_combat_byRust
cargo run
```

If using the wasm + frontend interaction:

```bash
# 1. Build wasm
wasm-pack build wasm_bridge --target web
cp -r wasm_bridge/pkg/* frontend/public/wasm_bridge/

# 2. Run frontend dev server
cd frontend
npm install
npm run dev
```

Then open `http://localhost:5173` in browser.

---

### 🐳 Docker 开发环境启动说明

### 🐳 Docker-based Development Environment Setup

本项目使用 Docker 容器运行 Solana 合约开发环境，包含 Rust、Solana CLI、Anchor CLI 等工具，推荐以此方式统一开发与部署流程。  
This project uses a Docker container for the Solana smart contract development environment, including Rust, Solana CLI, and Anchor CLI. We recommend this setup for consistent development and deployment.

---

#### ✅ 第一次启动（建议构建镜像）

#### ✅ First-time Startup (Recommended to build the image)

```bash
docker-compose up -d --build
```

这会构建镜像，并挂载本地代码目录到容器，支持代码热更新。  
This builds the container image and mounts the local code directory into the container, enabling hot reload support.

---

#### 🧳 进入开发容器

#### 🧳 Enter the Development Container

```bash
docker exec -it solana_dev_env bash
```

---

#### 📦 部署合约（容器内）

#### 📦 Deploy the Program (inside container)

```bash
cd /app/air_combat_anchor
anchor deploy
```

⚠️ 默认部署钱包路径为 `/root/.config/solana/dev_id.json`，请确保 `Anchor.toml` 中的 `[provider]` 区块已正确设置：  
⚠️ The default wallet for deployment is located at `/root/.config/solana/dev_id.json`. Ensure your `[provider]` block in `Anchor.toml` is configured like this:

```toml
[provider]
cluster = "localnet"
wallet = "/root/.config/solana/dev_id.json"
```

---

#### 💡 补充说明 / Additional Notes

- 如果 `solana airdrop` 报错，请确认是否连接的是本地链（默认 `http://127.0.0.1:8899`）。
- If `solana airdrop` fails, ensure that you are connected to a local validator (default: `http://127.0.0.1:8899`).
- 部署成功后会在终端输出 `Deploy success`，包含 Program Id 与 Transaction Signature。
- Upon successful deployment, the terminal will show `Deploy success`, with the Program Id and transaction signature.

---

## 🔌 Future Pluginization: Towards a Reusable Combat Engine

While this prototype began as a standalone Solana-integrated game, the underlying combat systems are being developed with reusability and modularity in mind.
The long-term goal is to evolve this codebase into a plug-and-play Bevy combat engine, extractable as a standalone plugin (bevy_combat_engine) or middleware crate for real-time PvE/PvP mechanics.
Planned features for the plugin version include:

- 🎯 Configurable player/combatant components
- 🌀 Hit detection + knockback logic
- 💥 Ability cooldown & zone targeting
- 🛡️ Directional blocking & parry systems
- 🧩 Clean integration into Bevy app lifecycle (.add_plugin(CombatPlugin))
  Once stabilized, the core combat loop will be decoupled from this game demo and offered as a community-friendly module — potentially submitable to the Bevy Plugin Index.
  📦 Interested in contributing to the pluginization effort? Reach out via GitHub issues.

## 🙋‍♀️ Author

Built by a solo dev transitioning from full-stack TypeScript to Rust/Web3.
Join me in exploring lore-driven, minimalist chain-integrated game engines.

---

## 🛠️ Project Vision

**This project started with a question:**

What if I built the PvP combat system I always wanted to play?

I was a long-time player of a martial-arts MMO called **《九阴真经》**, known for its freedom-focused, timing-sensitive large-scale PvP system. While the game is aging, its core combat design still feels unmatched. In particular, the responsiveness during aerial movement and multi-angle clashes left a deep impression on me.

This prototype is my way of reimagining that experience in a modern, self-contained, Web3-compatible system — and taking the first step toward a more expressive real-time combat engine.

Key design goals:

- **Directional blocking** Defensive actions only protect within a valid angle. Attacks from behind or from blind spots (e.g., overhead) deal extra damage or trigger critical hits.
  
- **Zone-specific targeting** Each move targets a region (upper/middle/lower body), and hitboxes are resolved accordingly. Defense must match the zone *and* direction.
  
- **Aerial combat** Characters can attack, parry, or be staggered mid-air — with the **same move set** as on the ground. No “jump-limited” simplifications.
  
- **Realism + fantasy** While grounded in physical logic (e.g., momentum, impact), the game allows non-realistic moves like air-dashes or magical counters — as long as they are **internally consistent** and tactically meaningful.
  

Tech stack:

- **Bevy (Rust)** for real-time ECS-based gameplay
- **Solana (Anchor)** for recording battle results, player state, and eventually skill ownership on-chain

This hackathon gave me the reason to finally start.

The vision is just beginning — and I intend to keep going.

**I didn’t find the game I was looking for — so I’m building it.**

---

### ⏳ Timeline & Commitment

I only discovered the Breakout Hackathon on **May 7th**, and decided to participate solo — with just one week to go.
Instead of rushing out a half-baked entry, I focused on building a **robust architecture** for a real-time combat engine with a clear long-term plan for Web3 integration.

What I'm submitting now is a **work-in-progress**, but it's real, structured, and growing every day.
This isn't a one-off hackathon project — it's the beginning of something bigger.

---

## License

MIT (for now) — open for contributors soon.