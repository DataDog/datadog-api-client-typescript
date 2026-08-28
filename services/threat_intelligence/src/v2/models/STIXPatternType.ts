import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The supported STIX pattern language.
 */
export type STIXPatternType = typeof STIX | UnparsedObject;
export const STIX = "stix";
