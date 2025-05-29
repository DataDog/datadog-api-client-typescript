import { UnparsedObject } from "@datadog/datadog-api-client";

import { SendSlackMessageAction } from "./SendSlackMessageAction";
import { SendTeamsMessageAction } from "./SendTeamsMessageAction";

/**
 * Defines an action that is executed when a routing rule matches certain criteria.
 */
export type RoutingRuleAction =
  | SendSlackMessageAction
  | SendTeamsMessageAction
  | UnparsedObject;
