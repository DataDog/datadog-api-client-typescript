/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether the schedule is currently delivering reports (`active`) or paused (`inactive`).
 */

export type ReportScheduleStatus =
  | typeof ACTIVE
  | typeof INACTIVE
  | UnparsedObject;
export const ACTIVE = "active";
export const INACTIVE = "inactive";
