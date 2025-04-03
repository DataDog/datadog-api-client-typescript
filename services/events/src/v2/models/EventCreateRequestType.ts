import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Entity type.
 */
export type EventCreateRequestType = typeof EVENT | UnparsedObject;
export const EVENT = "event";
