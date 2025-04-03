import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Event category to identify the type of event. Only the value `change` is supported. Support for other categories are coming. please reach out to datadog support if you're interested.
 */
export type EventCategory = typeof CHANGE | UnparsedObject;
export const CHANGE = "change";
