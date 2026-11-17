import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the split graph widget
 */
export type SplitGraphWidgetDefinitionType =
  | typeof SPLIT_GROUP
  | UnparsedObject;
export const SPLIT_GROUP = "split_group";
