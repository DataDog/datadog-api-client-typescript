import { UnparsedObject } from "@datadog/datadog-api-client";

import { TwilioIntegrationAccountBasicAuthUpdate } from "./TwilioIntegrationAccountBasicAuthUpdate";

/**
 * Authentication for updating the Twilio integration account. Exactly one method is set.
 */
export type TwilioIntegrationAccountAuthenticationUpdate =
  | TwilioIntegrationAccountBasicAuthUpdate
  | UnparsedObject;
