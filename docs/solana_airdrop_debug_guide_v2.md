
# 🛠 Solana 本地测试网络 Airdrop 调试命令备忘录

## 📌 基本信息

- 适用场景：Solana 本地链测试
- CLI 工具版本：Solana CLI 2.1.15+
- 启动验证器、公钥配置、空投、检查余额等操作合集

---

## 1️⃣ 检查当前 Solana 钱包地址与余额

```bash
solana address
solana balance
```

---

## 2️⃣ 设置自定义钱包密钥对

```bash
# 生成新钱包文件
solana-keygen new --outfile validator.json

# 设置 CLI 使用此 keypair 文件
solana config set --keypair validator.json
```

---

## 3️⃣ 启动本地 Solana validator 并设置初始化铸币账户

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

---

## 4️⃣ 向当前钱包请求空投（仅限本地链）

```bash
solana airdrop 5
```

如遇错误：
> `Error: airdrop request failed. This can happen when the rate limit is reached.`

请等待一段时间或重启 validator 再试。

---

## 5️⃣ 查看 slot 是否在推进

观察终端输出中：

```
Processed Slot: 431 | Confirmed Slot: 431 | Finalized Slot: 400
```

也可以通过日志筛查当前运行状态确认链运行正常。

---

## ✅ 验证操作成功

```bash
solana balance
```

如果余额非 0，则说明空投成功，系统运行无异常。
