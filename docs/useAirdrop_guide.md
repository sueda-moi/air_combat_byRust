
# 📄 useAirdrop Hook 使用说明 / Usage Guide (中英双语)

## 📌 简介 / Overview

我们封装了一个简洁实用的 Hook：`useAirdrop()`，用于在前端中一键领取 Solana 空投（支持 Devnet 或本地链）。

> A simple React hook to request SOL airdrops on Solana Devnet or localnet, with built-in loading and error feedback.

---

## 🧩 Hook API 说明 / Hook API

```ts
const { requestAirdrop, loading, message } = useAirdrop();
```

| 参数 / Return      | 类型 / Type        | 说明 / Description                              |
|--------------------|--------------------|--------------------------------------------------|
| `requestAirdrop()` | `() => Promise<void>` | 发起空投请求 / Trigger airdrop transaction     |
| `loading`          | `boolean`          | 是否正在请求 / Whether airdrop is in progress   |
| `message`          | `string \| null`   | UI 提示消息 / Status message for UI display     |

---

## 🧪 使用示例 / Usage Example

```tsx
import { useAirdrop } from "@/hooks/useAirdrop";

export default function AirdropButton() {
  const { requestAirdrop, loading, message } = useAirdrop();

  return (
    <div>
      <button onClick={requestAirdrop} disabled={loading}>
        {loading ? "领取中…" : "一键领取 1 SOL 空投"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
```

---

## ⚙ 内部逻辑 / Internal Logic

- 使用 `connection.requestAirdrop(publicKey, 1 SOL)` 请求空投
- 等待交易确认 `confirmTransaction(signature)`
- 获取余额并格式化展示
- 使用 `getErrorMessage()` 提取 `Error.message` 信息
- 自动处理网络错误 / 钱包未连接等异常情况

---

## 🎯 依赖项 / Dependencies

| 包名 / Package                       | 用途 / Purpose            |
|-------------------------------------|----------------------------|
| `@solana/web3.js`                   | 连接 Solana 链             |
| `@solana/wallet-adapter-react`      | 获取 `connection` 和 `wallet` |
| `getErrorMessage()`                 | 错误解析工具函数             |

---

## 🚧 已知限制 / Known Limitations

- 当前空投数量为固定的 `1 SOL`
- 默认连接到当前 WalletAdapter 提供的 `connection` 网络（例如 Devnet 或 Localnet）

---

## 🔮 后续可拓展 / Possible Future Enhancements

| 功能 / Feature                     | 说明 / Description                          |
|-----------------------------------|---------------------------------------------|
| 动态空投额度 / Dynamic amount     | 根据场景指定空投数量                         |
| 最低余额判断 / Balance threshold | 仅在余额不足时触发空投                       |
| 自动重试 / Retry                  | 在速率限制下自动重试                         |
| UI 通知增强 / Toast feedback     | 使用 Toast 弹窗或动画提示更友好               |

---

如需升级为高级版本，请联系 AI 工程助手 🧠。
