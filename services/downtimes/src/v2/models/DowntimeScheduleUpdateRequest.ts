import { UnparsedObject } from "@datadog/datadog-api-client";

import { DowntimeScheduleOneTimeCreateUpdateRequest } from "./DowntimeScheduleOneTimeCreateUpdateRequest";
import { DowntimeScheduleRecurrencesUpdateRequest } from "./DowntimeScheduleRecurrencesUpdateRequest";

/**
 * Schedule for the downtime.
 */
export type DowntimeScheduleUpdateRequest =
  | DowntimeScheduleRecurrencesUpdateRequest
  | DowntimeScheduleOneTimeCreateUpdateRequest
  | UnparsedObject;
