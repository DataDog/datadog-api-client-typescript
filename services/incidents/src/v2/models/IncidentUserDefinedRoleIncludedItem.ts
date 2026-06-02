import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentTypeObject } from "./IncidentTypeObject";
import { IncidentUserData } from "./IncidentUserData";

/**
 * A single included resource in a user-defined role response.
 */
export type IncidentUserDefinedRoleIncludedItem =
  | IncidentUserData
  | IncidentTypeObject
  | UnparsedObject;
