import { UnparsedObject } from "@datadog/datadog-api-client";

import { OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthRequest } from "./OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthRequest";

/**
 * Authentication for creating the OpenAI LLM Evaluations integration account. Exactly one method is set.
 */
export type OpenAILLMEvaluationsIntegrationAccountAuthenticationRequest =
  | OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthRequest
  | UnparsedObject;
