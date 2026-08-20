import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether to return the entities that converted at the target step, or those that dropped off.
 */
export type ProductAnalyticsJourneyConversionType =
  | typeof CONVERSION
  | typeof DROP_OFF
  | UnparsedObject;
export const CONVERSION = "conversion";
export const DROP_OFF = "drop-off";
