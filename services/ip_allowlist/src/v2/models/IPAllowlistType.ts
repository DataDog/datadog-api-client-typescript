import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * IP allowlist type.
 */
export type IPAllowlistType = typeof IP_ALLOWLIST | UnparsedObject;
export const IP_ALLOWLIST = "ip_allowlist";
