import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The authentication method type.
 */
export type TwilioIntegrationAccountBasicAuthType =
  | typeof BASIC
  | UnparsedObject;
export const BASIC = "basic";
