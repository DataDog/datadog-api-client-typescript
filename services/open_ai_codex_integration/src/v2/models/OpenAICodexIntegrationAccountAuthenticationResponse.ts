import { UnparsedObject } from "@datadog/datadog-api-client";

import { OpenAICodexIntegrationAccountBearerTokenAuthResponse } from "./OpenAICodexIntegrationAccountBearerTokenAuthResponse";

/**
 * Authentication configured on the OpenAI Codex integration account.
 */
export type OpenAICodexIntegrationAccountAuthenticationResponse =
  | OpenAICodexIntegrationAccountBearerTokenAuthResponse
  | UnparsedObject;
