/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the service level objective.
 */

export type SLOType =
  | typeof METRIC
  | typeof MONITOR
  | typeof TIME_SLICE
  | UnparsedObject;
export const METRIC = "metric";
export const MONITOR = "monitor";
export const TIME_SLICE = "time_slice";
