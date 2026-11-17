import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate";

/**
 * Authentication for updating the ChatGPT Enterprise integration account. Exactly one method is set.
 */
export type ChatGPTEnterpriseIntegrationAccountAuthenticationUpdate =
  | ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate
  | UnparsedObject;
