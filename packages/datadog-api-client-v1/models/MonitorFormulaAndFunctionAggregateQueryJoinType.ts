/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Join type for aggregate query join conditions.
 */

export type MonitorFormulaAndFunctionAggregateQueryJoinType =
  | typeof INNER
  | typeof LEFT
  | UnparsedObject;
export const INNER = "inner";
export const LEFT = "left";
