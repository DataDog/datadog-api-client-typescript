import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type for identity providers.
 */
export type IdentityProviderType = typeof IDENTITY_PROVIDERS | UnparsedObject;
export const IDENTITY_PROVIDERS = "identity_providers";
