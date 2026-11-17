import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the event.
 */
export type EventType = typeof EVENT | UnparsedObject;
export const EVENT = "event";
