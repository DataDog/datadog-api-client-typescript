/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsEventQuery } from "./ProductAnalyticsEventQuery";
import { ProductAnalyticsOccurrenceQuery } from "./ProductAnalyticsOccurrenceQuery";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A query definition discriminated by the `data_source` field.
 * Use `product_analytics` for standard event queries, or
 * `product_analytics_occurrence` for occurrence-filtered queries.
 */

export type ProductAnalyticsBaseQuery =
  | ProductAnalyticsEventQuery
  | ProductAnalyticsOccurrenceQuery
  | UnparsedObject;
