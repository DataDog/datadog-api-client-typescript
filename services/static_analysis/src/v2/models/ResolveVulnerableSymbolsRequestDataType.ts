import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resolve vulnerable symbols request resource type.
 */
export type ResolveVulnerableSymbolsRequestDataType =
  | typeof RESOLVE_VULNERABLE_SYMBOLS_REQUEST
  | UnparsedObject;
export const RESOLVE_VULNERABLE_SYMBOLS_REQUEST =
  "resolve-vulnerable-symbols-request";
