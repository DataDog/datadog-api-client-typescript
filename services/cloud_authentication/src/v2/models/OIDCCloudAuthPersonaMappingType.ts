import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type returned by the existing Custom OIDC persona mapping API.
 */
export type OIDCCloudAuthPersonaMappingType =
  | typeof CUSTOM_OIDC_IDENTITY_MAPPING
  | UnparsedObject;
export const CUSTOM_OIDC_IDENTITY_MAPPING = "custom_oidc_identity_mapping";
