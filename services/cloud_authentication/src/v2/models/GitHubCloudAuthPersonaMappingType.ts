import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for GitHub cloud authentication persona mapping.
 */
export type GitHubCloudAuthPersonaMappingType =
  | typeof GITHUB_OIDC_AUTH_CONFIG
  | UnparsedObject;
export const GITHUB_OIDC_AUTH_CONFIG = "github_oidc_auth_config";
