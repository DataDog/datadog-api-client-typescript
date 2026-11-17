import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse";

/**
 * Authentication configured on the ChatGPT Enterprise integration account.
 */
export type ChatGPTEnterpriseIntegrationAccountAuthenticationResponse =
  | ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse
  | UnparsedObject;
