import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The publication protection level of the app. `approval_required` means changes must go through an approval workflow before being published.
 */
export type AppProtectionLevel =
  | typeof DIRECT_PUBLISH
  | typeof APPROVAL_REQUIRED
  | UnparsedObject;
export const DIRECT_PUBLISH = "direct_publish";
export const APPROVAL_REQUIRED = "approval_required";
