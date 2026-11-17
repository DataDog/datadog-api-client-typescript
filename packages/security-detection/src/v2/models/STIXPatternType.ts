import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The supported STIX pattern language.
 */
export type STIXPatternType = typeof STIX | UnparsedObject;
export const STIX = "stix";
