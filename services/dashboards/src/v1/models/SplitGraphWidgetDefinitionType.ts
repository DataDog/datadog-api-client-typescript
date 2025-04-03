import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the split graph widget
 */
export type SplitGraphWidgetDefinitionType =
  | typeof SPLIT_GROUP
  | UnparsedObject;
export const SPLIT_GROUP = "split_group";
