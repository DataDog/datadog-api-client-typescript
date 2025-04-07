import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the event.
 */
export type RUMEventType = typeof RUM | UnparsedObject;
export const RUM = "rum";
