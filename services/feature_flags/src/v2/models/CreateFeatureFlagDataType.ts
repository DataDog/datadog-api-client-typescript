import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type.
 */
export type CreateFeatureFlagDataType = typeof FEATURE_FLAGS | UnparsedObject;
export const FEATURE_FLAGS = "feature-flags";
