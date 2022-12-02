/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Timeseries or Scalar response.
 */

export type FormulaAndFunctionResponseFormat =
  | typeof TIMESERIES
  | typeof SCALAR;
export const TIMESERIES = "timeseries";
export const SCALAR = "scalar";
