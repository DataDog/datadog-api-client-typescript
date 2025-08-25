/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Specifies the type of escalation target (example `users`, `schedules`, or `teams`).
 */

export type EscalationPolicyStepTargetType =
  | typeof USERS
  | typeof SCHEDULES
  | typeof TEAMS
  | UnparsedObject;
export const USERS = "users";
export const SCHEDULES = "schedules";
export const TEAMS = "teams";
