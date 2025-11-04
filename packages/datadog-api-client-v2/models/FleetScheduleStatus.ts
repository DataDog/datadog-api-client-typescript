/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of the schedule.
 * - `active`: The schedule is active and will create deployments according to its recurrence rule.
 * - `inactive`: The schedule is inactive and will not create any deployments.
 */

export type FleetScheduleStatus =
  | typeof ACTIVE
  | typeof INACTIVE
  | UnparsedObject;
export const ACTIVE = "active";
export const INACTIVE = "inactive";
