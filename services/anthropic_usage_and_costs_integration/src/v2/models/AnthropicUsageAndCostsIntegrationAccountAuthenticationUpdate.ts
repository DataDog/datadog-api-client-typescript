import { UnparsedObject } from "@datadog/datadog-api-client";

import { AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthUpdate } from "./AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthUpdate";

/**
 * Authentication for updating the Anthropic Usage and Costs integration account. Exactly one method is set.
 */
export type AnthropicUsageAndCostsIntegrationAccountAuthenticationUpdate =
  | AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthUpdate
  | UnparsedObject;
