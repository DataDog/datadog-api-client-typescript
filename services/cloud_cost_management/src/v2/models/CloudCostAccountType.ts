import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of a cloud cost account.
 */
export type CloudCostAccountType = typeof CLOUD_ACCOUNT | UnparsedObject;
export const CLOUD_ACCOUNT = "cloud_account";
