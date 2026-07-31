import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of automated action to perform when the rule triggers. `EXECUTE_WORKFLOW` runs a Datadog workflow; `ASSIGN_AGENT` assigns an AI agent to the case.
 */
export type AutomationRuleActionType =
  | typeof EXECUTE_WORKFLOW
  | typeof ASSIGN_AGENT
  | UnparsedObject;
export const EXECUTE_WORKFLOW = "EXECUTE_WORKFLOW";
export const ASSIGN_AGENT = "ASSIGN_AGENT";
