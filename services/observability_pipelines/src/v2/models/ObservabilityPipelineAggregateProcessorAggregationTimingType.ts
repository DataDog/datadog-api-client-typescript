import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Determines whether metrics are assigned to aggregation windows based on when they are processed or their timestamps.
 */
export type ObservabilityPipelineAggregateProcessorAggregationTimingType =
  | typeof SYSTEM_TIME
  | typeof EVENT_TIME
  | UnparsedObject;
export const SYSTEM_TIME = "system_time";
export const EVENT_TIME = "event_time";
