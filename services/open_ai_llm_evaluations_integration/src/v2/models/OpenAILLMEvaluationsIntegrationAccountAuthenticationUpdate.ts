import { UnparsedObject } from "@datadog/datadog-api-client";

import { OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthUpdate } from "./OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthUpdate";

/**
 * Authentication for updating the OpenAI LLM Evaluations integration account. Exactly one method is set.
 */
export type OpenAILLMEvaluationsIntegrationAccountAuthenticationUpdate =
  | OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthUpdate
  | UnparsedObject;
