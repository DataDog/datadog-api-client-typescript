import { UnparsedObject } from "@datadog/datadog-api-client";

import { ClaudeComplianceIntegrationAccountBearerTokenAuthRequest } from "./ClaudeComplianceIntegrationAccountBearerTokenAuthRequest";

/**
 * Authentication for creating the Claude Compliance integration account. Exactly one method is set.
 */
export type ClaudeComplianceIntegrationAccountAuthenticationRequest =
  | ClaudeComplianceIntegrationAccountBearerTokenAuthRequest
  | UnparsedObject;
