import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The SBOM component license type
 */
export type SBOMComponentLicenseType =
  | typeof NETWORK_STRONG_COPYLEFT
  | typeof NON_STANDARD_COPYLEFT
  | typeof OTHER_NON_FREE
  | typeof OTHER_NON_STANDARD
  | typeof PERMISSIVE
  | typeof PUBLIC_DOMAIN
  | typeof STRONG_COPYLEFT
  | typeof WEAK_COPYLEFT
  | UnparsedObject;
export const NETWORK_STRONG_COPYLEFT = "network_strong_copyleft";
export const NON_STANDARD_COPYLEFT = "non_standard_copyleft";
export const OTHER_NON_FREE = "other_non_free";
export const OTHER_NON_STANDARD = "other_non_standard";
export const PERMISSIVE = "permissive";
export const PUBLIC_DOMAIN = "public_domain";
export const STRONG_COPYLEFT = "strong_copyleft";
export const WEAK_COPYLEFT = "weak_copyleft";
