use wasm_bindgen::JsValue;
use solana_sdk::{
    instruction::Instruction,
    message::Message,
    transaction::Transaction,
};
use crate::onchain::bindings::sign_and_send_transaction;

/// 模拟构建指令，序列化交易并发送
pub async fn send_record_result(result: u8) {
    // TODO: 实际从 IDL 构造 Instruction，此处为模拟
    let fake_instruction = Instruction {
        program_id: solana_sdk::pubkey::Pubkey::new_unique(),
        accounts: vec![],
        data: vec![result], // 假装 result 就是唯一参数
    };

    let message = Message::new(&[fake_instruction], None);
    let tx = Transaction::new_unsigned(message);
    let serialized_tx = bincode::serialize(&tx).unwrap();

    let response: JsValue = sign_and_send_transaction(serialized_tx).await;

    // TODO: 你可以加入更多处理，例如 response.to_string()
    web_sys::console::log_1(&format!("Transaction sent: {:?}", response).into());
}
