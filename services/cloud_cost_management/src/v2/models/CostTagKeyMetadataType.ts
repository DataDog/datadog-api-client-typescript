import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Cloud Cost Management tag key metadata resource.
 */
export type CostTagKeyMetadataType =
  | typeof COST_TAG_KEY_METADATA
  | UnparsedObject;
export const COST_TAG_KEY_METADATA = "cost_tag_key_metadata";
