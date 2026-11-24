import { UnparsedObject } from "@datadog/datadog-api-client";

import { GitHubCostsIntegrationAccountBearerTokenAuthUpdate } from "./GitHubCostsIntegrationAccountBearerTokenAuthUpdate";

/**
 * Authentication for updating the GitHub Costs integration account. Exactly one method is set.
 */
export type GitHubCostsIntegrationAccountAuthenticationUpdate =
  | GitHubCostsIntegrationAccountBearerTokenAuthUpdate
  | UnparsedObject;
