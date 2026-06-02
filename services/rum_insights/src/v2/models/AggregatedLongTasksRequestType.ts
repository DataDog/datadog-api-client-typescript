import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for aggregated long tasks requests.
 */
export type AggregatedLongTasksRequestType =
  | typeof AGGREGATED_LONG_TASKS
  | UnparsedObject;
export const AGGREGATED_LONG_TASKS = "aggregated_long_tasks";
