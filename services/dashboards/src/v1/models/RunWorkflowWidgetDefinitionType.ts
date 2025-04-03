import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the run workflow widget.
 */
export type RunWorkflowWidgetDefinitionType =
  | typeof RUN_WORKFLOW
  | UnparsedObject;
export const RUN_WORKFLOW = "run_workflow";
