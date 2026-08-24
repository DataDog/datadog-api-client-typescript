import { UnparsedObject } from "@datadog/datadog-api-client";

import { IntegrationAccountBasicAuthRequest } from "./IntegrationAccountBasicAuthRequest";

/**
 * Authentication for creating the Twilio integration account. Exactly one method is set.
 */
export type TwilioIntegrationAccountAuthenticationRequest =
  | IntegrationAccountBasicAuthRequest
  | UnparsedObject;
