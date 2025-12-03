import { UnparsedObject } from "@datadog/datadog-api-client";

import { ConfiguredSchedule } from "./ConfiguredSchedule";
import { EscalationPolicyStep } from "./EscalationPolicyStep";
import { EscalationPolicyUser } from "./EscalationPolicyUser";
import { ScheduleData } from "./ScheduleData";
import { TeamReference } from "./TeamReference";

/**
 * Represents included related resources when retrieving an escalation policy, such as teams, steps, or targets.
 */
export type EscalationPolicyIncluded =
  | EscalationPolicyStep
  | EscalationPolicyUser
  | ScheduleData
  | ConfiguredSchedule
  | TeamReference
  | UnparsedObject;
