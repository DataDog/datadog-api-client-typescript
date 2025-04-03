import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the service summary widget.
 */
export type ServiceSummaryWidgetDefinitionType =
  | typeof TRACE_SERVICE
  | UnparsedObject;
export const TRACE_SERVICE = "trace_service";
