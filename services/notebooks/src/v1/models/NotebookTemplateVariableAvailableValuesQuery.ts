import { UnparsedObject } from "@datadog/datadog-api-client";

import { NotebookTemplateVariableAvailableValuesQueryLogRumSpans } from "./NotebookTemplateVariableAvailableValuesQueryLogRumSpans";
import { NotebookTemplateVariableAvailableValuesQueryMetrics } from "./NotebookTemplateVariableAvailableValuesQueryMetrics";

/**
 * Query used to dynamically populate the list of available values for the template variable.
 */
export type NotebookTemplateVariableAvailableValuesQuery =
  | NotebookTemplateVariableAvailableValuesQueryLogRumSpans
  | NotebookTemplateVariableAvailableValuesQueryMetrics
  | UnparsedObject;
