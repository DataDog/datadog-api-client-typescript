import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for dataset restrictions.
 */
export type DatasetRestrictionsType =
  | typeof DATASET_RESTRICTIONS
  | UnparsedObject;
export const DATASET_RESTRICTIONS = "dataset_restrictions";
