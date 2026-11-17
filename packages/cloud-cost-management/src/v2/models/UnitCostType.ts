import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The JSON:API resource type for a unit cost.
 */
export type UnitCostType = typeof UNIT_COST | UnparsedObject;
export const UNIT_COST = "unit_cost";
