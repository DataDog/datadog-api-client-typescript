import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Node type.
 */
export type ProductAnalyticsSankeyNodeType =
  | typeof REGULAR
  | typeof OTHER
  | typeof DROPOFF
  | UnparsedObject;
export const REGULAR = "regular";
export const OTHER = "other";
export const DROPOFF = "dropoff";
