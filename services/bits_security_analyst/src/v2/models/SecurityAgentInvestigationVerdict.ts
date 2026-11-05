import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Verdict of the investigation. Only completed investigations have one.
 */
export type SecurityAgentInvestigationVerdict =
  | typeof BENIGN
  | typeof SUSPICIOUS
  | typeof MALICIOUS
  | UnparsedObject;
export const BENIGN = "benign";
export const SUSPICIOUS = "suspicious";
export const MALICIOUS = "malicious";
