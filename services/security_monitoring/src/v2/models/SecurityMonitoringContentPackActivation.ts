import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The activation status of a content pack
 */
export type SecurityMonitoringContentPackActivation =
  | typeof NEVER_ACTIVATED
  | typeof ACTIVATED
  | typeof DEACTIVATED
  | UnparsedObject;
export const NEVER_ACTIVATED = "never_activated";
export const ACTIVATED = "activated";
export const DEACTIVATED = "deactivated";
