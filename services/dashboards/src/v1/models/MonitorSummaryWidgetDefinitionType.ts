import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the monitor summary widget.
 */
export type MonitorSummaryWidgetDefinitionType =
  | typeof MANAGE_STATUS
  | UnparsedObject;
export const MANAGE_STATUS = "manage_status";
