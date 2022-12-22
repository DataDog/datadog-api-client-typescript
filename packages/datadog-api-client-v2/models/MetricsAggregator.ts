/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of aggregation that can be performed on metrics queries.
 */

export type MetricsAggregator =
  | typeof AVG
  | typeof MIN
  | typeof MAX
  | typeof SUM
  | typeof LAST
  | UnparsedObject;
export const AVG = "avg";
export const MIN = "min";
export const MAX = "max";
export const SUM = "sum";
export const LAST = "last";
