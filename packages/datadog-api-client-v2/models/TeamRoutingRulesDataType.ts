/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Team routing rules resource type.
 */

export type TeamRoutingRulesDataType =
  | typeof TEAM_ROUTING_RULES
  | UnparsedObject;
export const TEAM_ROUTING_RULES = "team_routing_rules";
