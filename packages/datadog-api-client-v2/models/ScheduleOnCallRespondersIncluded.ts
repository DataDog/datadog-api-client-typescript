/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleData } from "./ScheduleData";
import { ScheduleOnCallResponderData } from "./ScheduleOnCallResponderData";
import { ShiftData } from "./ShiftData";
import { User } from "./User";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Represents a union of related resources included in the response, such as responder groups, shifts, schedules, and users.
*/

export type ScheduleOnCallRespondersIncluded = ScheduleOnCallResponderData | ShiftData | ScheduleData | User | UnparsedObject;