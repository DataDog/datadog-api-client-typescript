/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Aggregation used to order rows over the displayed time range.
 */

export type HeatgridSortAggregation =
  | typeof AVG
  | typeof MIN
  | typeof MAX
  | typeof SUM
  | UnparsedObject;
export const AVG = "avg";
export const MIN = "min";
export const MAX = "max";
export const SUM = "sum";
