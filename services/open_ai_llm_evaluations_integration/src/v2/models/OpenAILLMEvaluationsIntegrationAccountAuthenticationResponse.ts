import { UnparsedObject } from "@datadog/datadog-api-client";

import { OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthResponse } from "./OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthResponse";

/**
 * Authentication configured on the OpenAI LLM Evaluations integration account.
 */
export type OpenAILLMEvaluationsIntegrationAccountAuthenticationResponse =
  | OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthResponse
  | UnparsedObject;
