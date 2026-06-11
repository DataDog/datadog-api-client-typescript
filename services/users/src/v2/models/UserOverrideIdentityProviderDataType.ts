import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for identity providers.
 */
export type UserOverrideIdentityProviderDataType =
  | typeof IDENTITY_PROVIDERS
  | UnparsedObject;
export const IDENTITY_PROVIDERS = "identity_providers";
