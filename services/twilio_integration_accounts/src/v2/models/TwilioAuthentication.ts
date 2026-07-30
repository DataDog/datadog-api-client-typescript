import { UnparsedObject } from "@datadog/datadog-api-client";

import { TwilioBasicAuth } from "./TwilioBasicAuth";

/**
 * Authentication methods supported by the Twilio interface. Exactly one is set, selected by its `type`.
 */
export type TwilioAuthentication = TwilioBasicAuth | UnparsedObject;
