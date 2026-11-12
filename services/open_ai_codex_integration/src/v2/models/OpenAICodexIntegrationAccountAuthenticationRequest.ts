import { UnparsedObject } from "@datadog/datadog-api-client";

import { OpenAICodexIntegrationAccountBearerTokenAuthRequest } from "./OpenAICodexIntegrationAccountBearerTokenAuthRequest";

/**
 * Authentication for creating the OpenAI Codex integration account. Exactly one method is set.
 */
export type OpenAICodexIntegrationAccountAuthenticationRequest =
  | OpenAICodexIntegrationAccountBearerTokenAuthRequest
  | UnparsedObject;
