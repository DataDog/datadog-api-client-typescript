import { UnparsedObject } from "@datadog/datadog-api-client";

import { GitHubCostsIntegrationAccountBearerTokenAuthRequest } from "./GitHubCostsIntegrationAccountBearerTokenAuthRequest";

/**
 * Authentication for creating the GitHub Costs integration account. Exactly one method is set.
 */
export type GitHubCostsIntegrationAccountAuthenticationRequest =
  | GitHubCostsIntegrationAccountBearerTokenAuthRequest
  | UnparsedObject;
