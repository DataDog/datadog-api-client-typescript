/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The merge strategy to apply.
 */

export type ObservabilityPipelineReduceProcessorMergeStrategyStrategy =
  | typeof DISCARD
  | typeof RETAIN
  | typeof SUM
  | typeof MAX
  | typeof MIN
  | typeof ARRAY
  | typeof CONCAT
  | typeof CONCAT_NEWLINE
  | typeof CONCAT_RAW
  | typeof SHORTEST_ARRAY
  | typeof LONGEST_ARRAY
  | typeof FLAT_UNIQUE
  | UnparsedObject;
export const DISCARD = "discard";
export const RETAIN = "retain";
export const SUM = "sum";
export const MAX = "max";
export const MIN = "min";
export const ARRAY = "array";
export const CONCAT = "concat";
export const CONCAT_NEWLINE = "concat_newline";
export const CONCAT_RAW = "concat_raw";
export const SHORTEST_ARRAY = "shortest_array";
export const LONGEST_ARRAY = "longest_array";
export const FLAT_UNIQUE = "flat_unique";
