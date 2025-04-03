import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the event.
 */
export type LogType = typeof LOG | UnparsedObject;
export const LOG = "log";
