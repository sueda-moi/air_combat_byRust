# Dockerfile for Solana + Anchor development
# Place this in: E:/rustgameTraining/air_combat

FROM rust:1.85-slim AS base

# Install common dependencies
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    pkg-config \
    libssl-dev \
    libudev-dev \
    llvm \
    clang \
    protobuf-compiler \
    git \
    nodejs \
    npm \
    && apt-get clean

# 安装 Solana CLI v2.1.15 (兼容 anchor 0.31.1)
# 安装 Solana CLI
RUN sh -c "$(curl -sSfL https://release.anza.xyz/v2.1.15/install)" && \
    echo 'export PATH="/root/.local/share/solana/install/active_release/bin:$PATH"' >> /root/.bashrc


# 安装 Node.js & Yarn
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn

# Install Anchor CLI v0.31.1
RUN cargo install --git https://github.com/coral-xyz/anchor --tag v0.31.1 anchor-cli

# Install Node.js 20+ & Yarn (to match docs)
RUN npm install -g n && n 20 && npm install -g yarn@1.22.1

# Set working directory
WORKDIR /project

# Entry point
CMD ["bash"]
