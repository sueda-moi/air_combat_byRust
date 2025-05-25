use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub async fn sign_and_send_transaction(_serialized_tx: Vec<u8>) -> JsValue {
    web_sys::console::log_1(&"Dummy sign_and_send_transaction called".into());
    JsValue::from_str("mock-response")
}
