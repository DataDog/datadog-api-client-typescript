import { UnparsedObject } from "@datadog/datadog-api-client";

import { Layer } from "./Layer";
import { ScheduleMember } from "./ScheduleMember";
import { ScheduleUser } from "./ScheduleUser";
import { TeamReference } from "./TeamReference";

/**
 * Any additional resources related to this schedule, such as teams and layers.
 */
export type ScheduleDataIncludedItem =
  | TeamReference
  | Layer
  | ScheduleMember
  | ScheduleUser
  | UnparsedObject;
