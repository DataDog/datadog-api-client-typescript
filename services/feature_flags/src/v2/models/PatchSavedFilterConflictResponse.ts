import { UnparsedObject } from "@datadog/datadog-api-client";

import { SavedFilterApprovalConflictResponse } from "./SavedFilterApprovalConflictResponse";
import { SavedFilterJSONAPIErrorResponse } from "./SavedFilterJSONAPIErrorResponse";

/**
 * A stale update, duplicate name, or other conflict, or a resource listing consumer flags requiring approval.
 */
export type PatchSavedFilterConflictResponse =
  | SavedFilterJSONAPIErrorResponse
  | SavedFilterApprovalConflictResponse
  | UnparsedObject;
