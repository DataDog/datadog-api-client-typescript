import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The incident severity.
 */
export type IncidentSeverity =
  | typeof UNKNOWN
  | typeof SEV_1
  | typeof SEV_2
  | typeof SEV_3
  | typeof SEV_4
  | typeof SEV_5
  | UnparsedObject;
export const UNKNOWN = "UNKNOWN";
export const SEV_1 = "SEV-1";
export const SEV_2 = "SEV-2";
export const SEV_3 = "SEV-3";
export const SEV_4 = "SEV-4";
export const SEV_5 = "SEV-5";
