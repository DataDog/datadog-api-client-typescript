import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The state of the credentials configured on the entity context sync.
 */
export type SecurityMonitoringIntegrationConfigState =
  | typeof VALID
  | typeof INVALID
  | typeof INITIALIZING
  | UnparsedObject;
export const VALID = "valid";
export const INVALID = "invalid";
export const INITIALIZING = "initializing";
