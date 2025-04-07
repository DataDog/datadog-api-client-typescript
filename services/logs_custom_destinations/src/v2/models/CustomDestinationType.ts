import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `custom_destination`.
 */
export type CustomDestinationType = typeof CUSTOM_DESTINATION | UnparsedObject;
export const CUSTOM_DESTINATION = "custom_destination";
