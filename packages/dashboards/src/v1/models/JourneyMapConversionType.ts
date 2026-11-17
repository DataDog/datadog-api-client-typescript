import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Whether to show the paths that convert to the end step or drop off before it.
 */
export type JourneyMapConversionType =
  | typeof CONVERSION
  | typeof DROP_OFF
  | UnparsedObject;
export const CONVERSION = "conversion";
export const DROP_OFF = "drop-off";
