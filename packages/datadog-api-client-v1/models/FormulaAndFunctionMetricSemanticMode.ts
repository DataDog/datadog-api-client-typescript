/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Semantic mode for metrics queries. This determines how metrics from different sources are combined or displayed.
 */

export type FormulaAndFunctionMetricSemanticMode =
  | typeof COMBINED
  | typeof NATIVE
  | UnparsedObject;
export const COMBINED = "combined";
export const NATIVE = "native";
