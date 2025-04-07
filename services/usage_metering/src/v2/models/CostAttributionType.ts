import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of cost attribution data.
 */
export type CostAttributionType = typeof COST_BY_TAG | UnparsedObject;
export const COST_BY_TAG = "cost_by_tag";
