import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Field to sort org groups by.
 */
export type OrgGroupSortOption =
  | typeof NAME
  | typeof MINUS_NAME
  | typeof UUID
  | typeof MINUS_UUID
  | UnparsedObject;
export const NAME = "name";
export const MINUS_NAME = "-name";
export const UUID = "uuid";
export const MINUS_UUID = "-uuid";
