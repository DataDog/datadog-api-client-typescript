import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The kind of node. `regular` is a single facet value, `other` rolls up the values that did not
 * fit within `entries_per_step`, and `dropoff` collects the sessions that ended at this column.
 */
export type ProductAnalyticsSankeyNodeType =
  | typeof REGULAR
  | typeof OTHER
  | typeof DROPOFF
  | UnparsedObject;
export const REGULAR = "regular";
export const OTHER = "other";
export const DROPOFF = "dropoff";
