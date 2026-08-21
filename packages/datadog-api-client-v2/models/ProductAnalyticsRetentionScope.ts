/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionCellScope } from "./ProductAnalyticsRetentionCellScope";
import { ProductAnalyticsRetentionCohortScope } from "./ProductAnalyticsRetentionCohortScope";
import { ProductAnalyticsRetentionReturnPeriodScope } from "./ProductAnalyticsRetentionReturnPeriodScope";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Restricts a retention query to part of the grid, so that results can be examined in detail.
 * Omit it to compute the whole grid.
 */

export type ProductAnalyticsRetentionScope =
  | ProductAnalyticsRetentionCohortScope
  | ProductAnalyticsRetentionReturnPeriodScope
  | ProductAnalyticsRetentionCellScope
  | UnparsedObject;
