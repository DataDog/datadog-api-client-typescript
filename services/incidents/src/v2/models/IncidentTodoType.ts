import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Todo resource type.
 */
export type IncidentTodoType = typeof INCIDENT_TODOS | UnparsedObject;
export const INCIDENT_TODOS = "incident_todos";
