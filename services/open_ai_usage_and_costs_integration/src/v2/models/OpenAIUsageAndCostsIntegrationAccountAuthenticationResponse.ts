import { UnparsedObject } from "@datadog/datadog-api-client";

import { OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthResponse } from "./OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthResponse";

/**
 * Authentication configured on the OpenAI Usage and Costs integration account.
 */
export type OpenAIUsageAndCostsIntegrationAccountAuthenticationResponse =
  | OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthResponse
  | UnparsedObject;
