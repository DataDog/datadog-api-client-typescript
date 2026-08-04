import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Integration discriminator for Twilio.
 */
export type TwilioIntegrationType = typeof TWILIO | UnparsedObject;
export const TWILIO = "twilio";
