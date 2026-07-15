import { UnparsedObject } from "@datadog/datadog-api-client";

import { ScheduleData } from "./ScheduleData";
import { ScheduleOnCallResponderData } from "./ScheduleOnCallResponderData";
import { ShiftData } from "./ShiftData";
import { User } from "./User";

/**
 * Represents a union of related resources included in the response, such as responder groups, shifts, schedules, and users.
 */
export type ScheduleOnCallRespondersIncluded =
  | ScheduleOnCallResponderData
  | ShiftData
  | ScheduleData
  | User
  | UnparsedObject;
