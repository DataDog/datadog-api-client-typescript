import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Entity to track for retention.
 */
export type RetentionEntity =
  | typeof USER_ID
  | typeof ACCOUNT_ID
  | UnparsedObject;
export const USER_ID = "@usr.id";
export const ACCOUNT_ID = "@account.id";
