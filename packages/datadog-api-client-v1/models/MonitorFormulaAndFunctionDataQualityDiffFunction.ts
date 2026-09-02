/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Function applied to the measure before it is compared against the predicted bounds.
 */

export type MonitorFormulaAndFunctionDataQualityDiffFunction =
  | typeof DIFF
  | typeof DIFF_PERCENT
  | UnparsedObject;
export const DIFF = "DIFF";
export const DIFF_PERCENT = "DIFF_PERCENT";
