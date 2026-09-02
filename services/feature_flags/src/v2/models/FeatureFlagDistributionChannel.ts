import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The distribution channel for the feature flag.
 */
export type FeatureFlagDistributionChannel =
  | typeof ALL
  | typeof CLIENT
  | typeof SERVER
  | UnparsedObject;
export const ALL = "ALL";
export const CLIENT = "CLIENT";
export const SERVER = "SERVER";
