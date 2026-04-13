import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Field to sort policies by.
 */
export type OrgGroupPolicySortOption =
  | typeof ID
  | typeof MINUS_ID
  | typeof NAME
  | typeof MINUS_NAME
  | UnparsedObject;
export const ID = "id";
export const MINUS_ID = "-id";
export const NAME = "name";
export const MINUS_NAME = "-name";
