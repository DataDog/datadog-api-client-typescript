import { UnparsedObject } from "@datadog/datadog-api-client";

import { DowntimeScheduleOneTimeResponse } from "./DowntimeScheduleOneTimeResponse";
import { DowntimeScheduleRecurrencesResponse } from "./DowntimeScheduleRecurrencesResponse";

/**
 * The schedule that defines when the monitor starts, stops, and recurs. There are two types of schedules:
 * one-time and recurring. Recurring schedules may have up to five RRULE-based recurrences. If no schedules are
 * provided, the downtime will begin immediately and never end.
 */
export type DowntimeScheduleResponse =
  | DowntimeScheduleRecurrencesResponse
  | DowntimeScheduleOneTimeResponse
  | UnparsedObject;
