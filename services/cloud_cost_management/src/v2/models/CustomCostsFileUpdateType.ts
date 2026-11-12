import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Custom Costs file resource.
 */
export type CustomCostsFileUpdateType = typeof COST_METADATA | UnparsedObject;
export const COST_METADATA = "cost_metadata";
