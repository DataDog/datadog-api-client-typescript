import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `suppressions`.
 */
export type SecurityMonitoringSuppressionType =
  | typeof SUPPRESSIONS
  | UnparsedObject;
export const SUPPRESSIONS = "suppressions";
