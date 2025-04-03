import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Email domain allowlist allowlist type.
 */
export type DomainAllowlistType = typeof DOMAIN_ALLOWLIST | UnparsedObject;
export const DOMAIN_ALLOWLIST = "domain_allowlist";
