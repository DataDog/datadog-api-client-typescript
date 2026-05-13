import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Cloud Cost Management tag resource.
 */
export type CostTagType = typeof COST_TAG | UnparsedObject;
export const COST_TAG = "cost_tag";
