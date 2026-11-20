import { UnparsedObject } from "@datadog/datadog-api-client";

import { AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthRequest } from "./AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthRequest";

/**
 * Authentication for creating the Anthropic Usage and Costs integration account. Exactly one method is set.
 */
export type AnthropicUsageAndCostsIntegrationAccountAuthenticationRequest =
  | AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthRequest
  | UnparsedObject;
