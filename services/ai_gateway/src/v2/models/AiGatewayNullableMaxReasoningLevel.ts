import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Maximum reasoning level permitted by a model group.
 */
export type AiGatewayNullableMaxReasoningLevel =
  | typeof NONE
  | typeof MINIMAL
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof XHIGH
  | typeof MAX
  | UnparsedObject;
export const NONE = "none";
export const MINIMAL = "minimal";
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const XHIGH = "xhigh";
export const MAX = "max";
