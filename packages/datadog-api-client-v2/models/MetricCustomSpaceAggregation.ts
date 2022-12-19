/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A space aggregation for use in query.
 */

export type MetricCustomSpaceAggregation =
  | typeof AVG
  | typeof MAX
  | typeof MIN
  | typeof SUM
  | UnparsedObject;
export const AVG = "avg";
export const MAX = "max";
export const MIN = "min";
export const SUM = "sum";
