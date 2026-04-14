/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Aggregation type for user journey funnel compute.
 */

export type ProductAnalyticsFunnelComputeAggregation =
  | typeof CARDINALITY
  | typeof COUNT
  | UnparsedObject;
export const CARDINALITY = "cardinality";
export const COUNT = "count";
