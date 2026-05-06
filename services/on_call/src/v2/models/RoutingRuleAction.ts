import { UnparsedObject } from "@datadog/datadog-api-client";

import { SendSlackMessageAction } from "./SendSlackMessageAction";
import { SendTeamsMessageAction } from "./SendTeamsMessageAction";
import { TriggerWorkflowAutomationAction } from "./TriggerWorkflowAutomationAction";

/**
 * Defines an action that is executed when a routing rule matches certain criteria.
 */
export type RoutingRuleAction =
  | SendSlackMessageAction
  | SendTeamsMessageAction
  | TriggerWorkflowAutomationAction
  | UnparsedObject;
