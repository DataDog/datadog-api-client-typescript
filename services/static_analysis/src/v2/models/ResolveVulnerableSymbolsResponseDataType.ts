import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type identifier for responses containing resolved vulnerable symbols.
 */
export type ResolveVulnerableSymbolsResponseDataType =
  | typeof RESOLVE_VULNERABLE_SYMBOLS_RESPONSE
  | UnparsedObject;
export const RESOLVE_VULNERABLE_SYMBOLS_RESPONSE =
  "resolve-vulnerable-symbols-response";
