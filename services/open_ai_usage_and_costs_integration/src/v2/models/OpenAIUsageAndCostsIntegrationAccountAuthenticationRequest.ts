import { UnparsedObject } from "@datadog/datadog-api-client";

import { OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthRequest } from "./OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthRequest";

/**
 * Authentication for creating the OpenAI Usage and Costs integration account. Exactly one method is set.
 */
export type OpenAIUsageAndCostsIntegrationAccountAuthenticationRequest =
  | OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthRequest
  | UnparsedObject;
