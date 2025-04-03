import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the event stream widget.
 */
export type EventStreamWidgetDefinitionType =
  | typeof EVENT_STREAM
  | UnparsedObject;
export const EVENT_STREAM = "event_stream";
