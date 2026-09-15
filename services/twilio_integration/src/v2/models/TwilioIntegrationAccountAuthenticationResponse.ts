import { UnparsedObject } from "@datadog/datadog-api-client";

import { IntegrationAccountBasicAuthResponse } from "./IntegrationAccountBasicAuthResponse";

/**
 * Authentication configured on the Twilio integration account.
 */
export type TwilioIntegrationAccountAuthenticationResponse =
  | IntegrationAccountBasicAuthResponse
  | UnparsedObject;
