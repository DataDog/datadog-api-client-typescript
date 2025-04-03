import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of cost data.
 */
export type CostByOrgType = typeof COST_BY_ORG | UnparsedObject;
export const COST_BY_ORG = "cost_by_org";
