/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * What snoozed the Page. Only set while the Page is snoozed, together with `release_at`.
 * `ack_timeout`: the acknowledgment timeout. `team_rules_active_hours`: the Page was
 * triggered outside of the active hours of the team's routing rules. `manual_snooze`:
 * a user snoozed the Page.
 */

export type OnCallPageReleaseOrigin =
  | typeof ACK_TIMEOUT
  | typeof TEAM_RULES_ACTIVE_HOURS
  | typeof MANUAL_SNOOZE
  | UnparsedObject;
export const ACK_TIMEOUT = "ack_timeout";
export const TEAM_RULES_ACTIVE_HOURS = "team_rules_active_hours";
export const MANUAL_SNOOZE = "manual_snooze";
