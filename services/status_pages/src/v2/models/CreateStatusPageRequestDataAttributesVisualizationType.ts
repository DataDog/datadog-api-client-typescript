import { UnparsedObject } from "@datadog/datadog-api-client";
export type CreateStatusPageRequestDataAttributesVisualizationType =
  | typeof BARS_AND_UPTIME_PERCENTAGE
  | typeof BARS_ONLY
  | typeof COMPONENT_NAME_ONLY
  | UnparsedObject;
export const BARS_AND_UPTIME_PERCENTAGE = "bars_and_uptime_percentage";
export const BARS_ONLY = "bars_only";
export const COMPONENT_NAME_ONLY = "component_name_only";
