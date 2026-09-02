/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How the difference between the source and target measures is computed.
 * `absolute` subtracts the two values, `diff_percent` expresses the difference
 * as a percentage of the source value.
 */

export type MonitorFormulaAndFunctionDataQualityDiffType =
  | typeof ABSOLUTE
  | typeof DIFF_PERCENT
  | UnparsedObject;
export const ABSOLUTE = "absolute";
export const DIFF_PERCENT = "diff_percent";
