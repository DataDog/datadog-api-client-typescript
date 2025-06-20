import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Microsoft Sentinel destination.
 */
export type CustomDestinationResponseForwardDestinationMicrosoftSentinelType =
  | typeof MICROSOFT_SENTINEL
  | UnparsedObject;
export const MICROSOFT_SENTINEL = "microsoft_sentinel";
