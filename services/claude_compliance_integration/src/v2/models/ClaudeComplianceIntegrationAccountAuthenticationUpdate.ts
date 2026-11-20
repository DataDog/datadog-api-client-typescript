import { UnparsedObject } from "@datadog/datadog-api-client";

import { ClaudeComplianceIntegrationAccountBearerTokenAuthUpdate } from "./ClaudeComplianceIntegrationAccountBearerTokenAuthUpdate";

/**
 * Authentication for updating the Claude Compliance integration account. Exactly one method is set.
 */
export type ClaudeComplianceIntegrationAccountAuthenticationUpdate =
  | ClaudeComplianceIntegrationAccountBearerTokenAuthUpdate
  | UnparsedObject;
