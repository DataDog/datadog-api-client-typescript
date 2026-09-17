import { UnparsedObject } from "@datadog/datadog-api-client";

import { TwilioIntegrationAccountBasicAuthResponse } from "./TwilioIntegrationAccountBasicAuthResponse";

/**
 * Authentication configured on the Twilio integration account.
 */
export type TwilioIntegrationAccountAuthenticationResponse =
  | TwilioIntegrationAccountBasicAuthResponse
  | UnparsedObject;
