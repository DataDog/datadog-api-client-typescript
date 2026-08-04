import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Interface discriminator for Twilio.
 */
export type TwilioInterfaceType = typeof TWILIO | UnparsedObject;
export const TWILIO = "twilio";
