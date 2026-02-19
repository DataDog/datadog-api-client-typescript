import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the change request.
 */
export type ChangeRequestChangeType =
  | typeof NORMAL
  | typeof STANDARD
  | typeof EMERGENCY
  | UnparsedObject;
export const NORMAL = "NORMAL";
export const STANDARD = "STANDARD";
export const EMERGENCY = "EMERGENCY";
