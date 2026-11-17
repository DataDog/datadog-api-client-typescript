import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Account resource type.
 */
export type WebIntegrationAccountType = typeof ACCOUNT | UnparsedObject;
export const ACCOUNT = "Account";
