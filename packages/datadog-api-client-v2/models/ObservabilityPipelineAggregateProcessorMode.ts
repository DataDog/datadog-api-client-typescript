/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The aggregation mode applied to metrics that share the same name and tags within the interval.
 */

export type ObservabilityPipelineAggregateProcessorMode =
  | typeof AUTO
  | typeof SUM
  | typeof LATEST
  | typeof COUNT
  | typeof MAX
  | typeof MIN
  | typeof MEAN
  | UnparsedObject;
export const AUTO = "auto";
export const SUM = "sum";
export const LATEST = "latest";
export const COUNT = "count";
export const MAX = "max";
export const MIN = "min";
export const MEAN = "mean";
