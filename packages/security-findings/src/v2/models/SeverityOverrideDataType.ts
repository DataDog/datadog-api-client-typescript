import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Severity override resource type.
 */
export type SeverityOverrideDataType =
  | typeof SEVERITY_OVERRIDE
  | UnparsedObject;
export const SEVERITY_OVERRIDE = "severity_override";
