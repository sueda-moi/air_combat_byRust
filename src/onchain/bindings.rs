use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/dist/js_bridge.js")]
extern "C" {
    #[wasm_bindgen(js_name = signAndSendTransaction)]
    pub async fn sign_and_send_transaction(serialized_tx: Vec<u8>) -> JsValue;
}

