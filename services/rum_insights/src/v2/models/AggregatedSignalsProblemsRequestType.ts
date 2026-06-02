import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for aggregated signals and problems requests.
 */
export type AggregatedSignalsProblemsRequestType =
  | typeof AGGREGATED_SIGNALS_PROBLEMS
  | UnparsedObject;
export const AGGREGATED_SIGNALS_PROBLEMS = "aggregated_signals_problems";
