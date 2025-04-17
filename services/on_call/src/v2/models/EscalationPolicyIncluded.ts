import { UnparsedObject } from "@datadog/datadog-api-client";

import { EscalationPolicyStep } from "./EscalationPolicyStep";
import { ScheduleTarget } from "./ScheduleTarget";
import { TeamReference } from "./TeamReference";
import { TeamTarget } from "./TeamTarget";
import { UserTarget } from "./UserTarget";

/**
 * Represents included related resources when retrieving an escalation policy, such as teams, steps, or targets.
 */
export type EscalationPolicyIncluded =
  | TeamReference
  | EscalationPolicyStep
  | UserTarget
  | ScheduleTarget
  | TeamTarget
  | UnparsedObject;
