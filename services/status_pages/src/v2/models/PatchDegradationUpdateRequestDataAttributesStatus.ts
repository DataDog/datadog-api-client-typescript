import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the degradation update.
 */
export type PatchDegradationUpdateRequestDataAttributesStatus =
  | typeof INVESTIGATING
  | typeof IDENTIFIED
  | typeof MONITORING
  | UnparsedObject;
export const INVESTIGATING = "investigating";
export const IDENTIFIED = "identified";
export const MONITORING = "monitoring";
