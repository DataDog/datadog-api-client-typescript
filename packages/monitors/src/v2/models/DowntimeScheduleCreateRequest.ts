import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { DowntimeScheduleOneTimeCreateUpdateRequest } from "./DowntimeScheduleOneTimeCreateUpdateRequest";
import { DowntimeScheduleRecurrencesCreateRequest } from "./DowntimeScheduleRecurrencesCreateRequest";

/**
 * Schedule for the downtime.
 */
export type DowntimeScheduleCreateRequest =
  | DowntimeScheduleRecurrencesCreateRequest
  | DowntimeScheduleOneTimeCreateUpdateRequest
  | UnparsedObject;
