import { UnparsedObject } from "@datadog/datadog-api-client";

import { IntegrationAccountBasicAuthUpdate } from "./IntegrationAccountBasicAuthUpdate";

/**
 * Authentication for updating the Twilio integration account. Exactly one method is set.
 */
export type TwilioIntegrationAccountAuthenticationUpdate =
  | IntegrationAccountBasicAuthUpdate
  | UnparsedObject;
