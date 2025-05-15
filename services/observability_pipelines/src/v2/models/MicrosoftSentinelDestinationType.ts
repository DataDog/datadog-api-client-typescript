import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `microsoft_sentinel`.
 */
export type MicrosoftSentinelDestinationType =
  | typeof MICROSOFT_SENTINEL
  | UnparsedObject;
export const MICROSOFT_SENTINEL = "microsoft_sentinel";
