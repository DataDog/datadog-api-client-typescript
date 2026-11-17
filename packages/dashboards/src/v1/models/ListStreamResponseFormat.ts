import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Widget response format.
 */
export type ListStreamResponseFormat = typeof EVENT_LIST | UnparsedObject;
export const EVENT_LIST = "event_list";
