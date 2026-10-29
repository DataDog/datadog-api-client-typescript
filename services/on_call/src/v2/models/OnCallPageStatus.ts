import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The current status of the On-Call Page.
 */
export type OnCallPageStatus =
  | typeof TRIGGERED
  | typeof ACKNOWLEDGED
  | typeof RESOLVED
  | UnparsedObject;
export const TRIGGERED = "triggered";
export const ACKNOWLEDGED = "acknowledged";
export const RESOLVED = "resolved";
