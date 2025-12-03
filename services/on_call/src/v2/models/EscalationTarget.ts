import { UnparsedObject } from "@datadog/datadog-api-client";

import { ConfiguredScheduleTarget } from "./ConfiguredScheduleTarget";
import { ScheduleTarget } from "./ScheduleTarget";
import { TeamTarget } from "./TeamTarget";
import { UserTarget } from "./UserTarget";

/**
 * Represents an escalation target, which can be a team, user, schedule, or configured schedule target.
 */
export type EscalationTarget =
  | TeamTarget
  | UserTarget
  | ScheduleTarget
  | ConfiguredScheduleTarget
  | UnparsedObject;
