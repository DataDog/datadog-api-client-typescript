/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Comparison applied by this filter.
 */

export type ExperimentsMeasureComparisonFilterInputOperation =
  | typeof EQ
  | typeof NEQ
  | typeof GT
  | typeof GT_EQ
  | typeof LT
  | typeof LT_EQ
  | UnparsedObject;
export const EQ = "=";
export const NEQ = "!=";
export const GT = ">";
export const GT_EQ = ">=";
export const LT = "<";
export const LT_EQ = "<=";
