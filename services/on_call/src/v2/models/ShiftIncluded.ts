import { UnparsedObject } from "@datadog/datadog-api-client";

import { ScheduleUser } from "./ScheduleUser";

/**
 * Included data for shift operations.
 */
export type ShiftIncluded = ScheduleUser | UnparsedObject;
