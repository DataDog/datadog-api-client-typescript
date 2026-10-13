import { UnparsedObject } from "@datadog/datadog-api-client";

import { ScheduleUser } from "./ScheduleUser";

/**
 * Included data for on-call schedule override operations.
 */
export type OverrideIncluded = ScheduleUser | UnparsedObject;
