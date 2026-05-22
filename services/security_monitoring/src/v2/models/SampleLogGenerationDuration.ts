import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How long the subscription should remain active before expiring.
 */
export type SampleLogGenerationDuration =
  | typeof ONE_HOUR
  | typeof ONE_DAY
  | typeof THREE_DAYS
  | typeof SEVEN_DAYS
  | UnparsedObject;
export const ONE_HOUR = "1h";
export const ONE_DAY = "1d";
export const THREE_DAYS = "3d";
export const SEVEN_DAYS = "7d";
