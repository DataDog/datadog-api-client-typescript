import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of reports.
 */
export type UsageReportsType = typeof REPORTS | UnparsedObject;
export const REPORTS = "reports";
