import { UnparsedObject } from "@datadog/datadog-api-client";

import { GitHubCostsIntegrationAccountBearerTokenAuthResponse } from "./GitHubCostsIntegrationAccountBearerTokenAuthResponse";

/**
 * Authentication configured on the GitHub Costs integration account.
 */
export type GitHubCostsIntegrationAccountAuthenticationResponse =
  | GitHubCostsIntegrationAccountBearerTokenAuthResponse
  | UnparsedObject;
