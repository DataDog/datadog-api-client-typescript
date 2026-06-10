import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of dashboard resource the report schedule targets.
 */
export type ReportScheduleResourceType =
  | typeof DASHBOARD
  | typeof INTEGRATION_DASHBOARD
  | UnparsedObject;
export const DASHBOARD = "dashboard";
export const INTEGRATION_DASHBOARD = "integration_dashboard";
