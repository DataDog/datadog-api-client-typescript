import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of funnel widget.
 */
export type FunnelWidgetDefinitionType = typeof FUNNEL | UnparsedObject;
export const FUNNEL = "funnel";
