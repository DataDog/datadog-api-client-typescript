import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of security finding.
 */
export type SecurityFindingType =
  | typeof VULNERABILITY
  | typeof CONFIGURATION_FINDING
  | UnparsedObject;
export const VULNERABILITY = "vulnerability";
export const CONFIGURATION_FINDING = "configuration_finding";
