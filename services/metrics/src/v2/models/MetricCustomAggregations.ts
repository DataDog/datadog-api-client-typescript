import { UnparsedObject } from "@datadog/datadog-api-client";

import { MetricAvailableAggrFunctions } from "./MetricAvailableAggrFunctions";
import { MetricCustomAggregation } from "./MetricCustomAggregation";

/**
 * Deprecated. You no longer need to configure specific time and space aggregations for Metrics Without Limits.
 */
export type MetricCustomAggregations =
  | Array<MetricCustomAggregation>
  | Array<MetricAvailableAggrFunctions>
  | UnparsedObject;
