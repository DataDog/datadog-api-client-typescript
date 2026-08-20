import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The entity whose retention is measured.
 */
export type ProductAnalyticsRetentionEntity =
  | typeof USER_ID
  | typeof ACCOUNT_ID
  | UnparsedObject;
export const USER_ID = "@usr.id";
export const ACCOUNT_ID = "@account.id";
