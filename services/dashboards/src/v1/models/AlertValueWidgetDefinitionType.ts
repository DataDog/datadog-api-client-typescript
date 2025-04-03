import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the alert value widget.
 */
export type AlertValueWidgetDefinitionType =
  | typeof ALERT_VALUE
  | UnparsedObject;
export const ALERT_VALUE = "alert_value";
