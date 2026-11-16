import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for feature flag approval settings.
 */
export type FeatureFlagApprovalsDataType =
  | typeof FEATURE_FLAG_APPROVALS
  | UnparsedObject;
export const FEATURE_FLAG_APPROVALS = "feature-flag-approvals";
