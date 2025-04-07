import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * IP allowlist Entry type.
 */
export type IPAllowlistEntryType = typeof IP_ALLOWLIST_ENTRY | UnparsedObject;
export const IP_ALLOWLIST_ENTRY = "ip_allowlist_entry";
