import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Oncall type.
 */
export type EntityResponseIncludedOncallType = typeof ONCALL | UnparsedObject;
export const ONCALL = "oncall";
