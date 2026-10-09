import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Severity override resource type.
 */
export type SeverityOverrideDataType =
  | typeof SEVERITY_OVERRIDE
  | UnparsedObject;
export const SEVERITY_OVERRIDE = "severity_override";
