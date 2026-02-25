import { UnparsedObject } from "@datadog/datadog-api-client";

import { ProductAnalyticsEventQuery } from "./ProductAnalyticsEventQuery";
import { ProductAnalyticsOccurrenceQuery } from "./ProductAnalyticsOccurrenceQuery";

/**
 * A query definition discriminated by the `data_source` field.
 * Use `product_analytics` for standard event queries, or
 * `product_analytics_occurrence` for occurrence-filtered queries.
 */
export type ProductAnalyticsBaseQuery =
  | ProductAnalyticsEventQuery
  | ProductAnalyticsOccurrenceQuery
  | UnparsedObject;
