import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for this saved filter update error.
 */
export type SavedFilterApprovalConflictType =
  | typeof UPDATE_APPROVAL_CONFLICT
  | UnparsedObject;
export const UPDATE_APPROVAL_CONFLICT = "update-approval-conflict";
