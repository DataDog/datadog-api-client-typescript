import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for web integration accounts.
 */
export type WebIntegrationAccountType = typeof ACCOUNT | UnparsedObject;
export const ACCOUNT = "Account";
