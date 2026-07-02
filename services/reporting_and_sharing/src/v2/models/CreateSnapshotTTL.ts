import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The time-to-live for the snapshot. This value corresponds to storage lifecycle policies that automatically delete the snapshot after the specified period.
 */
export type CreateSnapshotTTL =
  | typeof THIRTY_DAYS
  | typeof SIXTY_DAYS
  | typeof NINETY_DAYS
  | typeof ONE_YEAR
  | typeof TWO_YEARS
  | typeof INFINITE
  | UnparsedObject;
export const THIRTY_DAYS = "30d";
export const SIXTY_DAYS = "60d";
export const NINETY_DAYS = "90d";
export const ONE_YEAR = "1y";
export const TWO_YEARS = "2y";
export const INFINITE = "inf";
