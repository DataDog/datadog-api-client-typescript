import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The STIX object type for an indicator.
 */
export type STIXIndicatorType = typeof INDICATOR | UnparsedObject;
export const INDICATOR = "indicator";
