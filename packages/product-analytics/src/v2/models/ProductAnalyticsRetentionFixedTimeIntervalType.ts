import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The discriminator identifying a fixed-length retention interval.
 */
export type ProductAnalyticsRetentionFixedTimeIntervalType =
  | typeof FIXED
  | UnparsedObject;
export const FIXED = "fixed";
