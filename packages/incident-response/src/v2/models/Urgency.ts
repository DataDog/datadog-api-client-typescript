import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Specifies the level of urgency for a routing rule (low, high, or dynamic).
 */
export type Urgency =
  | typeof LOW
  | typeof HIGH
  | typeof DYNAMIC
  | UnparsedObject;
export const LOW = "low";
export const HIGH = "high";
export const DYNAMIC = "dynamic";
