import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether the provider is working. `checking` means no observation has been recorded yet, not that a
 * check is running.
 */
export type AiGatewayProviderStatusState =
  | typeof OK
  | typeof INVALID
  | typeof CHECKING
  | UnparsedObject;
export const OK = "ok";
export const INVALID = "invalid";
export const CHECKING = "checking";
