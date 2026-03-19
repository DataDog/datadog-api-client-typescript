import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The verdict from the investigation step.
 */
export type SecurityMonitoringSignalInvestigationStepOutputVerdict =
  | typeof UNSPECIFIED
  | typeof BENIGN
  | typeof SUSPICIOUS
  | typeof INCONCLUSIVE
  | UnparsedObject;
export const UNSPECIFIED = "unspecified";
export const BENIGN = "benign";
export const SUSPICIOUS = "suspicious";
export const INCONCLUSIVE = "inconclusive";
