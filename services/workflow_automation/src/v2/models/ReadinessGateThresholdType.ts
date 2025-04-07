import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of `ReadinessGateThresholdType` object.
 */
export type ReadinessGateThresholdType =
  | typeof ANY
  | typeof ALL
  | UnparsedObject;
export const ANY = "ANY";
export const ALL = "ALL";
