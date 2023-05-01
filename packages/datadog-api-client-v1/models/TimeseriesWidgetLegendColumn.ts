/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Legend column.
 */

export type TimeseriesWidgetLegendColumn =
  | typeof VALUE
  | typeof AVG
  | typeof SUM
  | typeof MIN
  | typeof MAX
  | UnparsedObject;
export const VALUE = "value";
export const AVG = "avg";
export const SUM = "sum";
export const MIN = "min";
export const MAX = "max";
