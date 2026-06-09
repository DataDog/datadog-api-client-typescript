import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Template variable resource type.
 */
export type IncidentTemplateVariableType =
  | typeof TEMPLATE_VARIABLES
  | UnparsedObject;
export const TEMPLATE_VARIABLES = "template_variables";
