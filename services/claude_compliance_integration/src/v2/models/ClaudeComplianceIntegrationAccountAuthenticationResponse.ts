import { UnparsedObject } from "@datadog/datadog-api-client";

import { ClaudeComplianceIntegrationAccountBearerTokenAuthResponse } from "./ClaudeComplianceIntegrationAccountBearerTokenAuthResponse";

/**
 * Authentication configured on the Claude Compliance integration account.
 */
export type ClaudeComplianceIntegrationAccountAuthenticationResponse =
  | ClaudeComplianceIntegrationAccountBearerTokenAuthResponse
  | UnparsedObject;
