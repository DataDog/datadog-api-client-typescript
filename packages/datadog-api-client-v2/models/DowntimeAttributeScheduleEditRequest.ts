/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeAttributeScheduleOneTimeCreateEditRequest } from "./DowntimeAttributeScheduleOneTimeCreateEditRequest";
import { DowntimeAttributeScheduleRecurrencesEditRequest } from "./DowntimeAttributeScheduleRecurrencesEditRequest";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Schedule for the downtime.
 */

export type DowntimeAttributeScheduleEditRequest =
  | DowntimeAttributeScheduleRecurrencesEditRequest
  | DowntimeAttributeScheduleOneTimeCreateEditRequest
  | UnparsedObject;
