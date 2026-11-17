import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Indicates that the action triggers a Workflow Automation.
 */
export type TriggerWorkflowAutomationActionType =
  | typeof TRIGGER_WORKFLOW_AUTOMATION
  | UnparsedObject;
export const TRIGGER_WORKFLOW_AUTOMATION = "workflow";
