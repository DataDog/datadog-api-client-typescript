/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeScheduleOneTimeResponse } from "./DowntimeScheduleOneTimeResponse";
import { DowntimeScheduleRecurrencesResponse } from "./DowntimeScheduleRecurrencesResponse";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The schedule that defines when the monitor starts, stops, and recurs. There are two types of schedules:
 * one-time and recurring. Recurring schedules may have up to five RRULE-based recurrences. If no schedules are
 * provided, the downtime will begin immediately and never end.
 */

export type DowntimeScheduleResponse =
  | DowntimeScheduleRecurrencesResponse
  | DowntimeScheduleOneTimeResponse
  | UnparsedObject;
