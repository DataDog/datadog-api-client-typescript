/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Indicates that the action reroutes the page to another team's routing rules.
 */

export type RoutingRuleRerouteToTeamActionType =
  | typeof REROUTE_TO_TEAM
  | UnparsedObject;
export const REROUTE_TO_TEAM = "reroute_to_team";
