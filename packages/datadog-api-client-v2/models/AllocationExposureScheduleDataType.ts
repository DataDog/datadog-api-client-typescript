/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type for progressive rollout schedules.
 */

export type AllocationExposureScheduleDataType =
  | typeof ALLOCATION_EXPOSURE_SCHEDULES
  | UnparsedObject;
export const ALLOCATION_EXPOSURE_SCHEDULES = "allocation_exposure_schedules";
