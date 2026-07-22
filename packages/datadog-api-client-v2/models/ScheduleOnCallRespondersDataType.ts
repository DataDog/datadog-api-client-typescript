/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Represents the resource type for a schedule's grouped on-call responders across the previous, current, and next positions.
*/

export type ScheduleOnCallRespondersDataType = typeof SCHEDULE_ONCALL_RESPONDERS | UnparsedObject;
export const SCHEDULE_ONCALL_RESPONDERS = 'schedule_oncall_responders';