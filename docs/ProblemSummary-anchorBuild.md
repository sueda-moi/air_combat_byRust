**Anchor Build Troubleshooting Notes (English)**

**Date:** 2025-05-27  
**Project Directory:** `E:/rustgameTraining/air_combat/air_combat_anchor`

---

### ❗ Problem Summary

I encountered persistent errors when trying to run `anchor build`, especially when using Agave (Solana v2.2.x series) with Anchor CLI 0.31.1.

The most frustrating part was an **infinite toolchain corruption loop** where Anchor would continuously output:

```
The Solana toolchain is corrupted. Please, run cargo-build-sbf with the --force-tools-install argument to fix it.
```

No matter how many times I ran the recommended command, the error repeated itself.

---

### ✅ Final Working Versions (Based on Anchor 0.31.x Docs)

| Tool       | Version        |
| ---------- | -------------- |
| Rust       | 1.85.0         |
| Cargo      | 1.85.0         |
| Solana CLI | 2.1.15 (Agave) |
| Anchor CLI | 0.31.1         |

---

### 🪛 Root Causes & Fixes

1. **Incorrect Solana CLI Version**
   
   - Agave 2.2.14 had issues with Anchor 0.31.1.
   
   - Fix: Downgrade Solana to `2.1.15` (Agave) which is known to work with Anchor 0.31.1.

2. **Missing or corrupted platform-tools SDK (Rust lib)**
   
   - Symptom: Error mentions missing `platform-tools/rust/lib`
   
   - Fix: Re-run `cargo build-sbf --force-tools-install` (in correct directory!) *after* fixing toolchain compatibility.

3. **HOME Environment Variable Missing**
   
   - Symptom: `Can't get home directory path: environment variable not found`
   
   - Fix: Ensure `HOME` is set correctly (e.g., `C:\Users\fovig`) in system environment variables.

4. **Incorrect Working Directory**
   
   - Running install/init tools or `anchor build` in the wrong directory led to broken initialization paths.
   
   - Fix: Always confirm you are in the root of the Anchor project when running `anchor build`.

---

### 🧪 Working Build Command Flow (Final)

```bash
anchor clean
anchor build
```

Once the environment was fixed, this compiled the smart contract properly (with only application-level errors remaining).

---

### 📝 Notes for Future

- If you see persistent toolchain corruption, stop and check:
  
  - Solana version compatibility with Anchor
  
  - Whether the `platform-tools-sdk` actually extracted `rust/lib`
  
  - Whether `HOME` is set in Windows env vars

- Avoid mixing installation methods (e.g., agave-install + manual unzip)

- If all else fails, delete:
  
  - `C:\Users\<user>\.local\share\solana`
  
  - `C:\Users\<user>\.cache\solana`
  
  - And re-run `cargo build-sbf --force-tools-install`

---

Phew, it finally compiled after hours of frustration 😭

Next step: fix the actual Rust errors in `lib.rs` 😤
