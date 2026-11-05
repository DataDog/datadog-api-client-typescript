import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Zero data retention requirement for the organization's requests.
 */
export type AiGatewayZDRMode = typeof OFF | typeof REQUIRED | UnparsedObject;
export const OFF = "off";
export const REQUIRED = "required";
