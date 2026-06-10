import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the ownership inferences collection resource. The value should always be `ownership_inferences`.
 */
export type OwnershipInferencesType =
  | typeof OWNERSHIP_INFERENCES
  | UnparsedObject;
export const OWNERSHIP_INFERENCES = "ownership_inferences";
