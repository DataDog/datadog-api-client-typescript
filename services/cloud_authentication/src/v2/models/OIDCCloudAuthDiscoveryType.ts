import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the signing keys are discovered.
 */
export type OIDCCloudAuthDiscoveryType =
  | typeof OIDC_DISCOVERY
  | typeof DIRECT_JWKS
  | UnparsedObject;
export const OIDC_DISCOVERY = "oidc_discovery";
export const DIRECT_JWKS = "direct_jwks";
