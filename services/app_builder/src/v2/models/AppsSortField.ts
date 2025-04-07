import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The field and direction to sort apps by
 */
export type AppsSortField =
  | typeof NAME
  | typeof CREATED_AT
  | typeof UPDATED_AT
  | typeof USER_NAME
  | typeof NAME_DESC
  | typeof CREATED_AT_DESC
  | typeof UPDATED_AT_DESC
  | typeof USER_NAME_DESC
  | UnparsedObject;
export const NAME = "name";
export const CREATED_AT = "created_at";
export const UPDATED_AT = "updated_at";
export const USER_NAME = "user_name";
export const NAME_DESC = "-name";
export const CREATED_AT_DESC = "-created_at";
export const UPDATED_AT_DESC = "-updated_at";
export const USER_NAME_DESC = "-user_name";
