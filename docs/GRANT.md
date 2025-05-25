
# 🔷 Solana Grant Application Summary – Air Combat by Rust

## 📌 Project Description

Traditional game engines are not designed to natively support Web3 features such as on-chain battle state recording, asset ownership, or player progression.
I'm building a real-time combat engine using Rust and Bevy, specifically tailored for Solana integration.

The system follows a modular ECS architecture and includes hooks for on-chain transactions. My long-term goal is to turn this into a reusable battle engine plugin that other developers can use to power their own PvP or PvE Web3 games.

✅ This project was originally submitted to the 2025 Solana Breakpoint Hackathon. I'm now continuing development toward open-source readiness and future multiplayer functionality.

Ultimately, I hope to provide a solid combat foundation for Web3 game developers — bridging the gap between blockchain systems and real-time gameplay logic.

---

## 📂 GitHub Repository

https://github.com/sueda-moi/air_combat_byRust

> Modular Rust + Bevy battle engine with ECS architecture and early-stage Solana WASM integration. Work-in-progress with live combat loop and transaction trigger logic.

---

## 🎥 Devlog Video (Phase 1)

https://www.youtube.com/watch?v=-omqZkWaNsY&t=120s

> Demonstrates real-time combat system, WASD movement, slash attack, and simulated Solana Devnet transaction trigger (wallet interaction test).  
> Chain writing via Anchor is scheduled for the next milestone.

---

## 🚧 Next Milestone

- Anchor program development for on-chain battle record storage (`{player, win, ts}`)
- PDA record writing via client-triggered instructions
- Multi-enemy support, dynamic UI panel, story checkpoint integration
- Build-time and dev-time WASM compatibility improvements

---

## 🧑‍💻 About the Developer

This project is developed solo by a full-stack engineer transitioning from TypeScript + Java to Rust and Web3.  
Motivated by a dream of building a lore-driven real-time Web3 game system from scratch.
