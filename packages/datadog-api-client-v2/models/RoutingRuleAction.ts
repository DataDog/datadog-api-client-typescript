/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SlackAction } from "./SlackAction";
import { TeamsAction } from "./TeamsAction";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Defines an action that is executed when a routing rule matches certain criteria.
 */

export type RoutingRuleAction = SlackAction | TeamsAction | UnparsedObject;
