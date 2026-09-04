import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Kind of influence a tag has on a series.
 */
export type TimeseriesAnomalyInvestigationInfluenceType =
  | typeof SHAPE
  | typeof VALUE
  | UnparsedObject;
export const SHAPE = "shape";
export const VALUE = "value";
