import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the ownership inference resource. The value should always be `ownership_inference`.
 */
export type OwnershipInferenceType =
  | typeof OWNERSHIP_INFERENCE
  | UnparsedObject;
export const OWNERSHIP_INFERENCE = "ownership_inference";
