import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Status page email access policy resource type.
 */
export type StatusPageEmailAccessPolicyType =
  | typeof EMAIL_ACCESS_POLICIES
  | UnparsedObject;
export const EMAIL_ACCESS_POLICIES = "email_access_policies";
