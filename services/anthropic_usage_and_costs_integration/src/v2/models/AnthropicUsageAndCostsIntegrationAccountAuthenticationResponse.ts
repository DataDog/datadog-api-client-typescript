import { UnparsedObject } from "@datadog/datadog-api-client";

import { AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthResponse } from "./AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthResponse";

/**
 * Authentication configured on the Anthropic Usage and Costs integration account.
 */
export type AnthropicUsageAndCostsIntegrationAccountAuthenticationResponse =
  | AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthResponse
  | UnparsedObject;
