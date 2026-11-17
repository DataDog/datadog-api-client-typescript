import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Resource type.
 */
export type OIDCCloudAuthProviderType =
  | typeof CUSTOM_OIDC_PROVIDER_CONFIG
  | UnparsedObject;
export const CUSTOM_OIDC_PROVIDER_CONFIG = "custom_oidc_provider_config";
