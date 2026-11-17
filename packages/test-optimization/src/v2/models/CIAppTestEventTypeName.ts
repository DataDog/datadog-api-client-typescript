import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the event.
 */
export type CIAppTestEventTypeName = typeof CITEST | UnparsedObject;
export const CITEST = "citest";
