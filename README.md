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

---

## 🚧 Work in Progress

> This is an active prototype under development. More systems are being added every day.

| Next Milestones |
| --- |
| [ ] Multi-enemy system with targeting |
| [ ] Full ability system (hitbox + cooldowns) |
| [ ] On-chain battle recording (Anchor) |
| [ ] UI panel: result / log / wallet connect |
| [ ] Scene builder with snow-mountain theme |

---

## 🌄 World Vision

> Inspired by a recurring dream: companions with lost memories, rebellion against a hidden order, and a radiant snow mountain as the final destination.

This project will grow into a **lore-rich, modular open-source world engine**, starting from a minimalist battle system.

---

## ⚙️ Tech Stack

- 🦀 Rust + [Bevy 0.15](https://bevyengine.org/)
- 📦 ECS-based system modularization (Plugins)
- 🎮 Real-time combat systems (slash, stagger, velocity)
- 🧠 Designed for on-chain integration (Solana Devnet + Anchor)

---

## 📁 How to Run

```bash
git clone https://github.com/yourname/air_combat
cd air_combat
cargo run
```

---

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

- **Directional blocking**  
  Defensive actions only protect within a valid angle. Attacks from behind or from blind spots (e.g., overhead) deal extra damage or trigger critical hits.

- **Zone-specific targeting**  
  Each move targets a region (upper/middle/lower body), and hitboxes are resolved accordingly. Defense must match the zone *and* direction.

- **Aerial combat**  
  Characters can attack, parry, or be staggered mid-air — with the **same move set** as on the ground. No “jump-limited” simplifications.

- **Realism + fantasy**  
  While grounded in physical logic (e.g., momentum, impact), the game allows non-realistic moves like air-dashes or magical counters — as long as they are **internally consistent** and tactically meaningful.

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
