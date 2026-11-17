import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest";

/**
 * Authentication for creating the ChatGPT Enterprise integration account. Exactly one method is set.
 */
export type ChatGPTEnterpriseIntegrationAccountAuthenticationRequest =
  | ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest
  | UnparsedObject;
