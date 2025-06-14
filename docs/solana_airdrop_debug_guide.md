# Solana 本地链空投失败排查与常用命令

当你在使用 `solana-test-validator` 启动本地链时，可能会遇到如下空投失败提示：

```
Error: airdrop request failed. This can happen when the rate limit is reached.
```

## ✅ 1. 查看当前钱包地址与余额

```bash
solana address
solana balance
```

## ✅ 2. 设置当前使用的钱包密钥

确保你使用的是启动 `--mint` 参数时的 keypair，比如：

```bash
solana config set --keypair validator.json
```

## ✅ 3. 查看当前配置

```bash
solana config get
```

## ✅ 4. 从本地 faucet 请求空投（连接本地链）

```bash
solana airdrop 5 --url http://127.0.0.1:8899
```

⚠️ 若仍然提示 rate limit，可考虑：

- 等待 slot 增长至 500 以上
- 检查你的 validator 是否使用 `--mint` 并确保该账户余额充足

## ✅ 5. 查看 validator 进度（slot 状态）

```bash
# 查看 slot 是否持续增长（手动观察终端）
# 或查看终端日志输出：
Processed Slot / Confirmed Slot / Finalized Slot
```

## ✅ 6. 查看本地 mint 公钥

```bash
solana-keygen pubkey validator.json
```

---

## 🚰 如果使用 Devnet 并遇到限制，可用以下 faucet 网站：

- https://faucet.solana.com/
- https://solfaucet.com/
- https://faucet.quicknode.com/solana/devnet
- https://www.testnetfaucet.org/

---

建议重启电脑后继续运行 `solana-test-validator`，并确保你连接的是本地 `http://127.0.0.1:8899`，验证 slot 是否增长并再次尝试空投。





---

## 🌱 启动本地 Solana validator 并设置初始化铸币账户

```bash
# 启动本地 validator 并用指定公钥账户作为铸币账户
solana-test-validator --reset --mint <你的钱包公钥>
```

- `--reset`: 重置本地账本（清空旧状态）

- `--mint`: 指定该钱包为铸币地址，可以接收 `solana airdrop` 指令空投

📌 示例（假设你用 `validator.json` 文件生成的钱包）：

```bash
solana-test-validator --reset --mint EDQokx2S2cTUgVW16kHE2v4gZ9G9ReR3EuqCqQgJN9R3

```

```scss

📎 [点击下载更新后的 solana_airdrop_debug_guide_v2.md](sandbox:/mnt/data/solana_airdrop_debug_guide_v2.md)

你重启后就可以直接从这份文档恢复流程。如果还需要加入 `solana config set --keypair` 或 validator 启动日志查看方法也可以告诉我～

```
