import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type SloTimeWindow =
  | typeof SEVEN_D
  | typeof THIRTY_D
  | typeof NINETY_D
  | UnparsedObject;
export const SEVEN_D = "7d";
export const THIRTY_D = "30d";
export const NINETY_D = "90d";
