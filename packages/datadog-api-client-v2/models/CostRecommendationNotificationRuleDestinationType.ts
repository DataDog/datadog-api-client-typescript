/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Where the digest is sent. `slack` requires `workspace_id` and `channel_id`; `teams` requires the
 * `teams_*` attributes. Defaults to `slack`.
 */

export type CostRecommendationNotificationRuleDestinationType =
  | typeof SLACK
  | typeof TEAMS
  | UnparsedObject;
export const SLACK = "slack";
export const TEAMS = "teams";
