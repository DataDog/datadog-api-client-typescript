import { UnparsedObject } from "@datadog/datadog-api-client";

import { EscalationPolicyAction } from "./EscalationPolicyAction";
import { SendSlackMessageAction } from "./SendSlackMessageAction";
import { SendTeamsMessageAction } from "./SendTeamsMessageAction";

/**
 * Defines an action that is executed when a routing rule matches certain criteria.
 */
export type RoutingRuleAction =
  | SendSlackMessageAction
  | SendTeamsMessageAction
  | EscalationPolicyAction
  | UnparsedObject;
