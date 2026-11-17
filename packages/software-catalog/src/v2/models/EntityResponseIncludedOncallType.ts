import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Oncall type.
 */
export type EntityResponseIncludedOncallType = typeof ONCALL | UnparsedObject;
export const ONCALL = "oncall";
