import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Todo resource type.
 */
export type IncidentTodoType = typeof INCIDENT_TODOS | UnparsedObject;
export const INCIDENT_TODOS = "incident_todos";
