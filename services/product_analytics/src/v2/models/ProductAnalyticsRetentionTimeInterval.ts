import { UnparsedObject } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionCalendarTimeInterval } from "./ProductAnalyticsRetentionCalendarTimeInterval";
import { ProductAnalyticsRetentionFixedTimeInterval } from "./ProductAnalyticsRetentionFixedTimeInterval";

/**
 * A retention interval, either aligned to calendar boundaries or of a fixed length.
 * Cohort criteria use calendar intervals; return criteria use fixed intervals.
 */
export type ProductAnalyticsRetentionTimeInterval =
  | ProductAnalyticsRetentionCalendarTimeInterval
  | ProductAnalyticsRetentionFixedTimeInterval
  | UnparsedObject;
