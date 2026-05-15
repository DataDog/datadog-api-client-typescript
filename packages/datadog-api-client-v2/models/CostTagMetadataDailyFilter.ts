/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Granularity for tag metadata results. `true` returns one row per day, `false` (or omitted) returns the monthly roll-up.
 */

export type CostTagMetadataDailyFilter =
  | typeof TRUE
  | typeof FALSE
  | UnparsedObject;
export const TRUE = "true";
export const FALSE = "false";
