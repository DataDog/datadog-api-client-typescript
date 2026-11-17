import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of available-fields data.
 */
export type UsageSummaryAvailableFieldsType =
  | typeof USAGE_SUMMARY_AVAILABLE_FIELDS
  | UnparsedObject;
export const USAGE_SUMMARY_AVAILABLE_FIELDS = "usage_summary_available_fields";
