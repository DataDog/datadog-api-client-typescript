import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The WASM symbol representation.
 */
export type SourcemapSymbolType =
  | typeof DWARF
  | typeof SOURCEMAP
  | UnparsedObject;
export const DWARF = "dwarf";
export const SOURCEMAP = "sourcemap";
