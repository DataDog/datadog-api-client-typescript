import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of automated action to perform when the rule triggers. `execute_workflow` runs a Datadog workflow; `assign_agent` assigns an AI agent to the case.
 */
export type AutomationRuleActionType =
  | typeof EXECUTE_WORKFLOW
  | typeof ASSIGN_AGENT
  | UnparsedObject;
export const EXECUTE_WORKFLOW = "execute_workflow";
export const ASSIGN_AGENT = "assign_agent";
