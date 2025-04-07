import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * On-demand concurrency cap type.
 */
export type OnDemandConcurrencyCapType =
  | typeof ON_DEMAND_CONCURRENCY_CAP
  | UnparsedObject;
export const ON_DEMAND_CONCURRENCY_CAP = "on_demand_concurrency_cap";
