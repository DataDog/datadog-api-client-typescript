import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the SLO widget.
 */
export type SLOWidgetDefinitionType = typeof SLO | UnparsedObject;
export const SLO = "slo";
