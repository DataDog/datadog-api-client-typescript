/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleTarget } from "./ScheduleTarget";
import { TeamTarget } from "./TeamTarget";
import { UserTarget } from "./UserTarget";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Represents an escalation target, which can be a team, user, or schedule.
 */

export type EscalationTarget =
  | TeamTarget
  | UserTarget
  | ScheduleTarget
  | UnparsedObject;
