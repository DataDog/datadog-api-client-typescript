import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { IncidentTodoAnonymousAssignee } from "./IncidentTodoAnonymousAssignee";

/**
 * A todo assignee.
 */
export type IncidentTodoAssignee =
  | string
  | IncidentTodoAnonymousAssignee
  | UnparsedObject;
