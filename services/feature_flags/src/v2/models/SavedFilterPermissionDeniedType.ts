import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for this saved filter update error.
 */
export type SavedFilterPermissionDeniedType =
  | typeof UPDATE_GRACE_DENIED
  | UnparsedObject;
export const UPDATE_GRACE_DENIED = "update-grace-denied";
