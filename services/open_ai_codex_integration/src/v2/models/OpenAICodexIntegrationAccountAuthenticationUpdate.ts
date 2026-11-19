import { UnparsedObject } from "@datadog/datadog-api-client";

import { OpenAICodexIntegrationAccountBearerTokenAuthUpdate } from "./OpenAICodexIntegrationAccountBearerTokenAuthUpdate";

/**
 * Authentication for updating the OpenAI Codex integration account. Exactly one method is set.
 */
export type OpenAICodexIntegrationAccountAuthenticationUpdate =
  | OpenAICodexIntegrationAccountBearerTokenAuthUpdate
  | UnparsedObject;
