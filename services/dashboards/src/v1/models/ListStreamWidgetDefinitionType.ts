import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the list stream widget.
 */
export type ListStreamWidgetDefinitionType =
  | typeof LIST_STREAM
  | UnparsedObject;
export const LIST_STREAM = "list_stream";
