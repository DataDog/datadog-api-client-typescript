import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for this API. Should always be `cloudflare-accounts`.
 */
export type CloudflareAccountType = typeof CLOUDFLARE_ACCOUNTS | UnparsedObject;
export const CLOUDFLARE_ACCOUNTS = "cloudflare-accounts";
