import { UnparsedObject } from "@datadog/datadog-api-client";

import { ScheduleTarget } from "./ScheduleTarget";
import { TeamTarget } from "./TeamTarget";
import { UserTarget } from "./UserTarget";

/**
 * Represents an escalation target, which can be a team, user, or schedule.
 */
export type EscalationTarget =
  | TeamTarget
  | UserTarget
  | ScheduleTarget
  | UnparsedObject;
