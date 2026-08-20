import { UnparsedObject } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionCellScope } from "./ProductAnalyticsRetentionCellScope";
import { ProductAnalyticsRetentionCohortScope } from "./ProductAnalyticsRetentionCohortScope";
import { ProductAnalyticsRetentionReturnPeriodScope } from "./ProductAnalyticsRetentionReturnPeriodScope";

/**
 * Restricts a retention query to part of the grid, so that results can be examined in detail.
 * Omit it to compute the whole grid.
 */
export type ProductAnalyticsRetentionScope =
  | ProductAnalyticsRetentionCohortScope
  | ProductAnalyticsRetentionReturnPeriodScope
  | ProductAnalyticsRetentionCellScope
  | UnparsedObject;
