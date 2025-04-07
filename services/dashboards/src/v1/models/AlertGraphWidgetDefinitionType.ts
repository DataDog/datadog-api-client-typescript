import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the alert graph widget.
 */
export type AlertGraphWidgetDefinitionType =
  | typeof ALERT_GRAPH
  | UnparsedObject;
export const ALERT_GRAPH = "alert_graph";
