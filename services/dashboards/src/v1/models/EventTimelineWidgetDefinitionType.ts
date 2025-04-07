import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the event timeline widget.
 */
export type EventTimelineWidgetDefinitionType =
  | typeof EVENT_TIMELINE
  | UnparsedObject;
export const EVENT_TIMELINE = "event_timeline";
