import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of source map. Always `wasm` for WebAssembly symbol files.
 */
export type WASMSourcemapMapKind = typeof WASM | UnparsedObject;
export const WASM = "wasm";
