/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Timeseries, scalar, or event list response. Event list response formats are supported by Geomap widgets.
 */

export type FormulaAndFunctionResponseFormat =
  | typeof TIMESERIES
  | typeof SCALAR
  | typeof EVENT_LIST
  | UnparsedObject;
export const TIMESERIES = "timeseries";
export const SCALAR = "scalar";
export const EVENT_LIST = "event_list";
