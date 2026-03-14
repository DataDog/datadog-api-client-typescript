import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The state of the investigation.
 */
export type SecurityMonitoringSignalInvestigationState =
  | typeof INVESTIGATING
  | typeof COMPLETED
  | UnparsedObject;
export const INVESTIGATING = "investigating";
export const COMPLETED = "completed";
