import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Finding category for an influential tag.
 */
export type TimeseriesAnomalyInvestigationInfluentialTagFindingType =
  | typeof INFLUENTIAL_TAG
  | UnparsedObject;
export const INFLUENTIAL_TAG = "influential_tag";
