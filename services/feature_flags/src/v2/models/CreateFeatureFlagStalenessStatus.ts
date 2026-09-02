import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The staleness status for the feature flag at creation.
 */
export type CreateFeatureFlagStalenessStatus =
  | typeof ACTIVE
  | typeof PERMANENT
  | UnparsedObject;
export const ACTIVE = "ACTIVE";
export const PERMANENT = "PERMANENT";
