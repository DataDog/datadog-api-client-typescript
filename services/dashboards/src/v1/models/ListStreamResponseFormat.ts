import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Widget response format.
 */
export type ListStreamResponseFormat = typeof EVENT_LIST | UnparsedObject;
export const EVENT_LIST = "event_list";
