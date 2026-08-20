/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionAggregationTarget } from "./ProductAnalyticsRetentionAggregationTarget";
import { ProductAnalyticsRetentionIndexTarget } from "./ProductAnalyticsRetentionIndexTarget";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Selects a cohort, either by index or by the aggregation that rolls all cohorts together.
 */

export type ProductAnalyticsRetentionCohortTarget =
  | ProductAnalyticsRetentionIndexTarget
  | ProductAnalyticsRetentionAggregationTarget
  | UnparsedObject;
