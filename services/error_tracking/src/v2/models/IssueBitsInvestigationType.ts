import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the object.
 */
export type IssueBitsInvestigationType =
  | typeof BITS_INVESTIGATION
  | UnparsedObject;
export const BITS_INVESTIGATION = "bits_investigation";
