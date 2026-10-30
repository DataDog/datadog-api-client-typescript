import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The Supply Chain Firewall outcome for a package, a matched rule, or the whole request.
 */
export type AIGuardScfwOutcome =
  | typeof ALLOW
  | typeof WARN
  | typeof BLOCK
  | UnparsedObject;
export const ALLOW = "ALLOW";
export const WARN = "WARN";
export const BLOCK = "BLOCK";
