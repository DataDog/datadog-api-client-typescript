import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for this API. Should always be `fastly-accounts`.
 */
export type FastlyAccountType = typeof FASTLY_ACCOUNTS | UnparsedObject;
export const FASTLY_ACCOUNTS = "fastly-accounts";
