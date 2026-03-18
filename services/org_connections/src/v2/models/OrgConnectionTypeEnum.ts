import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Available connection types between organizations.
 */
export type OrgConnectionTypeEnum =
  | typeof LOGS
  | typeof METRICS
  | typeof AUDIT
  | UnparsedObject;
export const LOGS = "logs";
export const METRICS = "metrics";
export const AUDIT = "audit";
