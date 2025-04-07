import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource.
 */
export type ApmRetentionFilterType =
  | typeof apm_retention_filter
  | UnparsedObject;
export const apm_retention_filter = "apm_retention_filter";
