import { UnparsedObject } from "@datadog/datadog-api-client";

import { SlackAction } from "./SlackAction";
import { TeamsAction } from "./TeamsAction";

/**
 * Defines an action that is executed when a routing rule matches certain criteria.
 */
export type RoutingRuleAction = SlackAction | TeamsAction | UnparsedObject;
