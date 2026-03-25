/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Standard aggregation types for events-based queries.
 */

export type EventsAggregationValue =
  | typeof AVG
  | typeof CARDINALITY
  | typeof COUNT
  | typeof DELTA
  | typeof EARLIEST
  | typeof LATEST
  | typeof MAX
  | typeof MEDIAN
  | typeof MIN
  | typeof MOST_FREQUENT
  | typeof SUM
  | UnparsedObject;
export const AVG = "avg";
export const CARDINALITY = "cardinality";
export const COUNT = "count";
export const DELTA = "delta";
export const EARLIEST = "earliest";
export const LATEST = "latest";
export const MAX = "max";
export const MEDIAN = "median";
export const MIN = "min";
export const MOST_FREQUENT = "most_frequent";
export const SUM = "sum";
