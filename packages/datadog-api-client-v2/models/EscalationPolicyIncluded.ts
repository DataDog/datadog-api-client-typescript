/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyStep } from "./EscalationPolicyStep";
import { ScheduleTarget } from "./ScheduleTarget";
import { TeamReference } from "./TeamReference";
import { TeamTarget } from "./TeamTarget";
import { UserTarget } from "./UserTarget";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
