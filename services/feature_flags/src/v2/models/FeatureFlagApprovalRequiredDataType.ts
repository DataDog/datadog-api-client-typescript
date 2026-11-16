import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for an approval-required response.
 */
export type FeatureFlagApprovalRequiredDataType =
  | typeof APPROVAL_REQUIRED
  | UnparsedObject;
export const APPROVAL_REQUIRED = "approval-required";
