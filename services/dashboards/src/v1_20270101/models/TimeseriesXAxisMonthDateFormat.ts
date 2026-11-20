import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TimeseriesXAxisMonthDateFormat =
  | typeof AUTO
  | typeof MMM
  | typeof MMM_YYYY
  | typeof MM_YYYY
  | typeof MMMM_YYYY
  | UnparsedObject;
export const AUTO = "auto";
export const MMM = "MMM";
export const MMM_YYYY = "MMM yyyy";
export const MM_YYYY = "MM/yyyy";
export const MMMM_YYYY = "MMMM yyyy";
