import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Entity type.
 */
export type EventCreateRequestType = typeof EVENT | UnparsedObject;
export const EVENT = "event";
