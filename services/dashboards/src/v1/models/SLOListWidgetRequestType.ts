import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Widget request type.
 */
export type SLOListWidgetRequestType = typeof SLO_LIST | UnparsedObject;
export const SLO_LIST = "slo_list";
