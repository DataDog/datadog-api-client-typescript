import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for GitHub cloud authentication intake mapping.
 */
export type GitHubCloudAuthIntakeMappingType =
  | typeof GITHUB_OIDC_AUTH_INTAKE_MAPPING
  | UnparsedObject;
export const GITHUB_OIDC_AUTH_INTAKE_MAPPING =
  "github_oidc_auth_intake_mapping";
