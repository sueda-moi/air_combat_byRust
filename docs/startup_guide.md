# 🐳 Docker 开发环境启动说明（Solana + Anchor）

> 更新时间：2025-05-28  
> 本文档用于快速启动项目开发环境，基于 Docker 和 Anchor 构建 Solana 合约开发环境。

---

## ✅ 环境前提 | Prerequisites

- 已安装 Docker Desktop / Docker Desktop is installed
- 已安装 Git / Git is installed
- 本地目录结构 / Project structure:
  ```bash
  xxxx/air_combat
  ├── Dockerfile
  ├── docker-compose.yml
  └── ...（你的项目源码 / your project files）
  ```

---

## 🚀 第一次启动 | First-time Setup

```bash
docker-compose up -d --build
```

这一步会 / This step will:
- 构建包含 Rust、Solana CLI、Anchor CLI 的镜像 / Build a dev image with Rust, Solana CLI, Anchor
- 将项目源码挂载到容器 / Mount your source code into the container

### 🔄 启动已构建容器 | Start container (skip rebuild)
```bash
docker-compose up -d
```

### ⛔ 停止容器 | Stop container
```bash
docker-compose down
```

### 🧑‍💻 进入容器交互模式 | Enter container shell
```bash
docker exec -it solana_dev_env bash
```

---

## 🛠️ 日常开发流程 | Daily Development

不涉及 Dockerfile 修改时 / If Dockerfile is unchanged:
```bash
docker-compose up -d       # 启动容器 / start container
docker-compose exec dev bash  # 进入容器 / enter shell
anchor build               # 编译合约 / build contracts
```

---

## 📦 编译产物 | Build Artifacts

- 编译生成的 `target/` 和 `deploy/` 位于容器内 `/app/` 目录（已挂载本地）
- Artifacts are located inside `/app/`, synced with host directory

---

## 🧼 Docker 构建加速建议 | Build Optimization

### 建议添加 `.dockerignore`

在项目根目录创建 `.dockerignore` 以避免无用文件进入镜像 / Reduce build context:

```dockerignore
# Rust build artifacts
/target
**/target

# WASM build outputs
/pkg
wasm_bridge/pkg
wasm_bridge/target

# Node.js
node_modules
/frontend/node_modules
/frontend/dist

# Editor/project files
.vscode
.idea
*.log
.DS_Store

# Env / Secrets
.env
.env.*

# Anchor / Solana cache
.anchor
test-ledger
backup
programs/battle_record_old

# Git / backups
.git
.gitignore
*.rsbk
*.tar.*
```

---

## 🧽 清理命令 | Cleanup

### 停止并删除容器 / Stop and remove containers
```bash
docker-compose down
```

### 强制重建镜像 / Force rebuild
```bash
docker-compose build --no-cache
```

---

## 📦 项目依赖版本 | Toolchain Versions

与 Dockerfile 保持一致 / Match Dockerfile specs:
- Rust: **1.85.0**
- Solana CLI: **2.1.15** (Agave)
- Anchor CLI: **0.31.1**
- Node.js: **v20.x**
- Yarn: **1.22.1**

---

## 📁 挂载说明 | Volume Mapping

- 容器默认将本地当前目录挂载为 `/project`
- Code is synchronized between host and `/project` in the container

---

## ❤️ 遇到问题？| Troubleshooting

- 确保 Docker Desktop 正常运行 / Docker Desktop must be running
- 报错 `anchor build` 时优先检查依赖版本 / Verify toolchain if `anchor build` fails
- 如需协助请联系项目维护者 / Contact maintainer: **槐溯** ✨
