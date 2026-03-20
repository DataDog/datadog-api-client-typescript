import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type.
 */
export type UpdateFeatureFlagDataType = typeof FEATURE_FLAGS | UnparsedObject;
export const FEATURE_FLAGS = "feature-flags";
