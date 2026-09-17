import { UnparsedObject } from "@datadog/datadog-api-client";

import { TwilioIntegrationAccountBasicAuthRequest } from "./TwilioIntegrationAccountBasicAuthRequest";

/**
 * Authentication for creating the Twilio integration account. Exactly one method is set.
 */
export type TwilioIntegrationAccountAuthenticationRequest =
  | TwilioIntegrationAccountBasicAuthRequest
  | UnparsedObject;
