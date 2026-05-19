/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The position of a weekday within a month for a monthly Synthetics downtime recurrence. `1` through `4` select the first through fourth occurrence of the weekday in the month, and `-1` selects the last occurrence.
 */

export type SyntheticsDowntimeWeekdayPosition =
  | typeof FIRST
  | typeof SECOND
  | typeof THIRD
  | typeof FOURTH
  | typeof LAST
  | UnparsedObject;
export const FIRST = 1;
export const SECOND = 2;
export const THIRD = 3;
export const FOURTH = 4;
export const LAST = -1;
