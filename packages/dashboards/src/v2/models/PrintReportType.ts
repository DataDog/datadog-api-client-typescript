import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * JSON:API resource type for a print-only report.
 */
export type PrintReportType = typeof REPORT | UnparsedObject;
export const REPORT = "report";
