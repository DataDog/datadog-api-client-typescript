import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The direction in which to shift the severity of matched findings by one rank.
 */
export type SeverityModifierSeverityDelta =
  | typeof UP_ONE
  | typeof DOWN_ONE
  | UnparsedObject;
export const UP_ONE = "up_one";
export const DOWN_ONE = "down_one";
