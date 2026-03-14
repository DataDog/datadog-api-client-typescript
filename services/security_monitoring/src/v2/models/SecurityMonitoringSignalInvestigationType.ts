import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of investigation signal.
 */
export type SecurityMonitoringSignalInvestigationType =
  | typeof INVESTIGATION_SIGNAL
  | UnparsedObject;
export const INVESTIGATION_SIGNAL = "investigation_signal";
