import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Authentication method discriminator.
 */
export type TwilioBasicAuthType = typeof BASIC | UnparsedObject;
export const BASIC = "basic";
