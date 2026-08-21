import { UnparsedObject } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionAggregationTarget } from "./ProductAnalyticsRetentionAggregationTarget";
import { ProductAnalyticsRetentionIndexTarget } from "./ProductAnalyticsRetentionIndexTarget";

/**
 * Selects a cohort, either by index or by the aggregation that rolls all cohorts together.
 */
export type ProductAnalyticsRetentionCohortTarget =
  | ProductAnalyticsRetentionIndexTarget
  | ProductAnalyticsRetentionAggregationTarget
  | UnparsedObject;
