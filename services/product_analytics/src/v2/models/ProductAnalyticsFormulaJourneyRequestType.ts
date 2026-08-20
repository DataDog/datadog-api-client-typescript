import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a journey timeseries or scalar request.
 */
export type ProductAnalyticsFormulaJourneyRequestType =
  | typeof FORMULA_JOURNEY_REQUEST
  | UnparsedObject;
export const FORMULA_JOURNEY_REQUEST = "formula_journey_request";
