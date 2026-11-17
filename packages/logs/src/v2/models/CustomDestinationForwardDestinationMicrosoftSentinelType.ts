import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the Microsoft Sentinel destination.
 */
export type CustomDestinationForwardDestinationMicrosoftSentinelType =
  | typeof MICROSOFT_SENTINEL
  | UnparsedObject;
export const MICROSOFT_SENTINEL = "microsoft_sentinel";
