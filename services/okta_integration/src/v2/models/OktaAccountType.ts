import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Account type for an Okta account.
 */
export type OktaAccountType = typeof OKTA_ACCOUNTS | UnparsedObject;
export const OKTA_ACCOUNTS = "okta-accounts";
