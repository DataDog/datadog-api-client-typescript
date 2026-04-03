import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of targeting rule (called allocation in the API model).
 */
export type AllocationType =
  | typeof FEATURE_GATE
  | typeof CANARY
  | UnparsedObject;
export const FEATURE_GATE = "FEATURE_GATE";
export const CANARY = "CANARY";
