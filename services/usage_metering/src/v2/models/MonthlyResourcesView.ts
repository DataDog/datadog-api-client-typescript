import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether to return billable resources or the full monthly resource breakdown.
 */
export type MonthlyResourcesView =
  | typeof BILLABLE
  | typeof ALL
  | UnparsedObject;
export const BILLABLE = "billable";
export const ALL = "all";
