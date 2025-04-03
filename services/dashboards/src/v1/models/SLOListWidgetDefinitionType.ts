import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the SLO List widget.
 */
export type SLOListWidgetDefinitionType = typeof SLO_LIST | UnparsedObject;
export const SLO_LIST = "slo_list";
