import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the degradation.
 */
export type CreateDegradationRequestDataAttributesStatus =
  | typeof INVESTIGATING
  | typeof IDENTIFIED
  | typeof MONITORING
  | typeof RESOLVED
  | UnparsedObject;
export const INVESTIGATING = "investigating";
export const IDENTIFIED = "identified";
export const MONITORING = "monitoring";
export const RESOLVED = "resolved";
