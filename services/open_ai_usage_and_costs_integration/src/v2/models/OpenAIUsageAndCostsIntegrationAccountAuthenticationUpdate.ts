import { UnparsedObject } from "@datadog/datadog-api-client";

import { OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthUpdate } from "./OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthUpdate";

/**
 * Authentication for updating the OpenAI Usage and Costs integration account. Exactly one method is set.
 */
export type OpenAIUsageAndCostsIntegrationAccountAuthenticationUpdate =
  | OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthUpdate
  | UnparsedObject;
