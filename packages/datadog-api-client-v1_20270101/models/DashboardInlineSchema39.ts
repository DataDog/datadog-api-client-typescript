/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type DashboardInlineSchema39 =
  | typeof SUM
  | typeof MIN
  | typeof MAX
  | typeof AVG
  | typeof COUNT
  | typeof CARDINALITY
  | typeof MEDIAN
  | typeof DELTA
  | typeof LATEST
  | typeof EARLIEST
  | typeof MOST_FREQUENT
  | typeof ANY
  | UnparsedObject;
export const SUM = "sum";
export const MIN = "min";
export const MAX = "max";
export const AVG = "avg";
export const COUNT = "count";
export const CARDINALITY = "cardinality";
export const MEDIAN = "median";
export const DELTA = "delta";
export const LATEST = "latest";
export const EARLIEST = "earliest";
export const MOST_FREQUENT = "most_frequent";
export const ANY = "any";
