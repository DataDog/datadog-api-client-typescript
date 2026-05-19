import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of facet for filtering Model Lab runs.
 */
export type ModelLabFacetType =
  | typeof PARAMETER
  | typeof ATTRIBUTE
  | typeof TAG
  | typeof METRIC
  | UnparsedObject;
export const PARAMETER = "parameter";
export const ATTRIBUTE = "attribute";
export const TAG = "tag";
export const METRIC = "metric";
