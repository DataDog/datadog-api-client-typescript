import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident Jira template resource type.
 */
export type IncidentJiraTemplateType =
  | typeof INCIDENTS_JIRA_TEMPLATES
  | UnparsedObject;
export const INCIDENTS_JIRA_TEMPLATES = "incidents_jira_templates";
