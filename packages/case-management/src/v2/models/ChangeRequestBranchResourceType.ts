import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Change request branch resource type.
 */
export type ChangeRequestBranchResourceType =
  | typeof CHANGE_REQUEST_BRANCH
  | UnparsedObject;
export const CHANGE_REQUEST_BRANCH = "change_request_branch";
