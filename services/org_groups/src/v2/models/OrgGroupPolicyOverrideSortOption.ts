import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Field to sort overrides by.
 */
export type OrgGroupPolicyOverrideSortOption =
  | typeof ID
  | typeof MINUS_ID
  | typeof ORG_UUID
  | typeof MINUS_ORG_UUID
  | UnparsedObject;
export const ID = "id";
export const MINUS_ID = "-id";
export const ORG_UUID = "org_uuid";
export const MINUS_ORG_UUID = "-org_uuid";
