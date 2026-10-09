import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the resource is of type 'overrides'.
 */
export type OverrideDataType = typeof OVERRIDES | UnparsedObject;
export const OVERRIDES = "overrides";
