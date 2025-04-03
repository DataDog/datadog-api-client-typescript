import { UnparsedObject } from "@datadog/datadog-api-client";

import { User } from "./User";

/**
 * An object related to an incident todo that is included in the response.
 */
export type IncidentTodoResponseIncludedItem = User | UnparsedObject;
